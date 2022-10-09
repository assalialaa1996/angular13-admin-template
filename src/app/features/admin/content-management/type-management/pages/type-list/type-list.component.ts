import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CreateUpdateCategoryComponent } from '../../../category-management/components/create-update-category/create-update-category.component';
import { CategoryService } from '../../../category-management/services/category.service';
import { TypeService } from '../../services/type.service';
import { CreateUpdateTypeComponent } from '../../components/create-update-type/create-update-type.component';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'image', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private typeService: TypeService) {
    this.server = environment.base_url;
  }




  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getTypes();
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

  getTypes= () => this.typeService.getAll().subscribe(
    (res: any) => {
      this.dataSource = new MatTableDataSource(res);
    }
  )

  openCreateUpdateDialog = (service?: any) => {
    if (service) {
      const dialogRef = this.dialog.open(CreateUpdateTypeComponent, {
        data: service,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getTypes()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateTypeComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getTypes()
      });
    }


  }

  deleteType= (id: string) => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم ، احذفها!',
      cancelButtonText:'إلغاء',
    }).then((result) => {
      if (result.isConfirmed) {
        this.typeService.remove(id).subscribe(
          res => {
            Swal.fire(
              'تم الحذف!',
              'تم حذف الصنف.',
              'success'
            );
            this.getTypes();
          }
        )

      }
    })

  }


}
