import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/shared/model/service.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CreateUpdateServiceComponent } from '../../../service-management/components/create-update-service/create-update-service.component';
import { ServiceService } from '../../../service-management/services/service.service';
import { CategoryService } from '../../services/category.service';
import { CreateUpdateCategoryComponent } from '../../components/create-update-category/create-update-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'image', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private categoryService: CategoryService) {
    this.server = environment.base_url;
  }




  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getCategories();
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

  getCategories= () => this.categoryService.getAll().subscribe(
    (res: any) => {
      this.dataSource = new MatTableDataSource(res);
    }
  )

  openCreateUpdateDialog = (service?: any) => {
    if (service) {
      const dialogRef = this.dialog.open(CreateUpdateCategoryComponent, {
        data: service,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getCategories()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateCategoryComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getCategories()
      });
    }


  }

  deleteCategory = (id: string) => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم ، احذفها!',
      cancelButtonText:'إلغاء',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.remove(id).subscribe(
          res => {
            Swal.fire(
              'تم الحذف!',
              'تم حذف الصنف.',
              'success'
            );
            this.getCategories();
          }
        )

      }
    })

  }


}
