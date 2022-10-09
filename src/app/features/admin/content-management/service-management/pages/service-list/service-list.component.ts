import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { CreateUpdateServiceComponent } from '../../components/create-update-service/create-update-service.component';
import { ServiceService } from '../../services/service.service';
import { environment } from '../../../../../../../environments/environment';
import { Service } from '../../../../../../shared/model/service.model';






@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'image', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private serviceService: ServiceService) {
    this.server = environment.base_url;
  }




  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getServices();
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

  getServices = () => this.serviceService.getAll().subscribe(
    (res: any) => {
      this.dataSource = new MatTableDataSource(res);
    }
  )

  openCreateUpdateDialog = (service?: Service) => {
    if (service) {
      const dialogRef = this.dialog.open(CreateUpdateServiceComponent, {
        data: service,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getServices()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateServiceComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getServices()
      });
    }


  }

  deleteService = (id: string) => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم ، احذفها!',
      cancelButtonText:'إلغاء',
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceService.remove(id).subscribe(
          res => {
            Swal.fire(
              'تم الحذف!',
              'تم حذف الخدمة.',
              'success'
            );
            this.getServices();
          }
        )

      }
    })

  }

}

export enum ActionEnum {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}