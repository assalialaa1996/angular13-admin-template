import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TypeService } from 'src/app/features/admin/content-management/type-management/services/type.service';
import { environment } from 'src/environments/environment';
import { CreateHotelAccountComponent } from '../../components/create-hotel-account/create-hotel-account.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'email', 'phone', 'createdAt', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  type = new FormControl('INDIVIDUAL');

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedType: string;

  constructor(public dialog: MatDialog, private userService: UserService) {
    this.server = environment.base_url;
    //this.dataSource = new MatTableDataSource([]);
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getCustomers(CustomerTypeEnum.INDIVIDUAL)
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

  onTypeChange(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
    this.getCustomers(this.selectedType);
  }

  openCreateDialog = () => {

    const dialogRef = this.dialog.open(CreateHotelAccountComponent, {
      data: {},
      direction: 'rtl',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getCustomers(CustomerTypeEnum.BUSINESS)
    });

  }

  getCustomers = (type: string) => this.userService.getCustomers(type).subscribe(
    (res: any) => this.dataSource = new MatTableDataSource(res)
  )
}


export enum CustomerTypeEnum {
  BUSINESS = 'BUSINESS',

  INDIVIDUAL = 'INDIVIDUAL',

}
