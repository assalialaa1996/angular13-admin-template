import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/shared/model/service.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CreateUpdateServiceComponent } from '../../components/create-update-service/create-update-service.component';
import { ServiceService } from '../../services/service.service';
import { CreateServiceCategoryComponent } from '../../components/create-service-category/create-service-category.component';
import { CategoryService } from '../../../category-management/services/category.service';

@Component({
  selector: 'app-service-category-list',
  templateUrl: './service-category-list.component.html',
  styleUrls: ['./service-category-list.component.scss']
})
export class ServiceCategoryListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'image', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  serviceId: string;
  service: Service;

  constructor(public dialog: MatDialog, private serviceService: ServiceService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.serviceId = params['id']
      });
    this.server = environment.base_url;
  }




  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getService(this.serviceId);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*
  * --- CUSTOM METHODS ---
  */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getService = (id: string) => this.serviceService.getOne(id).subscribe(
    (res: Service) => {
      this.service = res
      this.dataSource = new MatTableDataSource(this.service.serviceCategories);
    }
  )

  openCreateUpdateDialog = () => {

      const dialogRef = this.dialog.open(CreateServiceCategoryComponent, {
        data: {service: this.serviceId},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getService(this.serviceId)
      });
 
  }

  deleteServiceCategory = (id: string) => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم ، احذفها!',
      cancelButtonText:'إلغاء',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.removeCategoryFromService(id).subscribe(
          res => {
            Swal.fire(
              'تم الحذف!',
              'تم حذف الخدمة.',
              'success'
            );
            this.getService(this.serviceId);
          }
        )

      }
    })

  }

}
