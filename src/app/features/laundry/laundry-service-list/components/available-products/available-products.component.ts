import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LaundryService } from '../../../services/laundry.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-available-products',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss']
})
export class AvailableProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['service', 'category', 'type', 'customPrice', 'businessPrice', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  laundry: any;

  constructor(private productService: ProductService,
    public dialogRef: MatDialogRef<AvailableProductsComponent>,
    private laundryService: LaundryService,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.getLaundryDetails()
  }

  addProductToLaundry = (productId: string) => this.productService.addToLaundry({
    product: productId,
    laundry: this.data.id
  }).subscribe(
    res => this.getLaundryDetails()
  )
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  getLaundryDetails = () => this.laundryService.getOne().subscribe(
    (res: any) => {
      this.laundry = res;
      this.productService.getAll().subscribe(
        (res: any) => {
          let productList = [];
          for (const product of res) {
            let exist = false;
            for (const prod of this.laundry.laundryProducts) {
              if (prod.product.id == product.id) exist = true
            }
            if(exist == false) productList.push(product)
          }
          this.dataSource = new MatTableDataSource(productList);
        }
      )

    }
  )

}
