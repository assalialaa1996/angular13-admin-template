import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/features/admin/content-management/category-management/services/category.service';
import { CreateServiceCategoryComponent } from 'src/app/features/admin/content-management/service-management/components/create-service-category/create-service-category.component';
import { ServiceService } from 'src/app/features/admin/content-management/service-management/services/service.service';
import { Service } from 'src/app/shared/model/service.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';
import { AvailableProductsComponent } from '../../components/available-products/available-products.component';
import { LaundryService } from '../../../services/laundry.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  displayedColumns: string[] = ['service', 'category', 'type', 'customPrice', 'businessPrice', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  laundry: any;


  constructor(public dialog: MatDialog,
    private laundryService: LaundryService,
    private productService: ProductService) {

    this.server = environment.base_url;
  }




  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getLaundryDetails();
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

  getLaundryDetails = () => this.laundryService.getOne().subscribe(
    (res: any) => {this.laundry = res;
    
      this.dataSource = new MatTableDataSource(res.laundryProducts);}
  )

  removeLaundryProduct = (laundryProductId: string) => this.productService.removeProductFromLaundry(laundryProductId).subscribe(
    res => this.getLaundryDetails()
  )

  openUpdateDialog = () => {

    const dialogRef = this.dialog.open(AvailableProductsComponent, {
      data: this.laundry,
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
       this.getLaundryDetails()
    });

  }

}
