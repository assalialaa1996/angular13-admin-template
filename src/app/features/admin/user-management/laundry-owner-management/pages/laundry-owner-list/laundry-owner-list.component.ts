import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { CreateHotelAccountComponent } from '../../../customer-management/components/create-hotel-account/create-hotel-account.component';
import { CustomerTypeEnum } from '../../../customer-management/pages/customer-list/customer-list.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-laundry-owner-list',
  templateUrl: './laundry-owner-list.component.html',
  styleUrls: ['./laundry-owner-list.component.scss']
})
export class LaundryOwnerListComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'email', 'phone', 'createdAt', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog, private userService: UserService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getLaundryOwners()
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

  openCreateDialog = () => {

    const dialogRef = this.dialog.open(CreateHotelAccountComponent, {
      data: {},
      direction: 'rtl',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getLaundryOwners()
    });

  }

  getLaundryOwners = () => this.userService.getLaundryOwners().subscribe(
    (res: any) => this.dataSource = new MatTableDataSource(res)
  )

}
