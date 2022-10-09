import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/shared/model/service.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../category-management/services/category.service';
import { CreateServiceCategoryComponent } from '../../components/create-service-category/create-service-category.component';
import { ServiceService } from '../../services/service.service';
import { CreateProductPricingComponent } from '../../components/create-product-pricing/create-product-pricing.component';
import { ProductService } from '../../../product-management/services/product/product.service';
import { UpdateProductPricingComponent } from '../../components/update-product-pricing/update-product-pricing.component';

@Component({
  selector: 'app-product-list-pricing',
  templateUrl: './product-list-pricing.component.html',
  styleUrls: ['./product-list-pricing.component.scss']
})
export class ProductListPricingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'image', 'customPrice', 'businessPrice', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  serviceCategoryId: string;
  service: Service;
  serviceCategory: any;

  constructor(public dialog: MatDialog, private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.serviceCategoryId = params['id']
      });
    this.server = environment.base_url;
  }




  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getServiceCategory(this.serviceCategoryId);
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

  getServiceCategory = (id: string) => this.categoryService.getServiceCategory(id).subscribe(
    (res: any) => {
      this.serviceCategory = res
      this.dataSource = new MatTableDataSource(this.serviceCategory.products);
    }
  )

  openCreateDialog = () => {

      const dialogRef = this.dialog.open(CreateProductPricingComponent, {
        data: {service: this.serviceCategoryId},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getServiceCategory(this.serviceCategoryId)
      });
 
  }

  openUpdateDialog = (product) => {

    const dialogRef = this.dialog.open(UpdateProductPricingComponent, {
      data: product,
      direction: 'rtl',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getServiceCategory(this.serviceCategoryId)
    });

}

  deleteProduct = (id: string) => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم ، احذفها!',
      cancelButtonText:'إلغاء',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.remove(id).subscribe(
          res => {
            Swal.fire(
              'تم الحذف!',
              'تم حذف الخدمة.',
              'success'
            );
            this.getServiceCategory(this.serviceCategoryId);
          }
        )

      }
    })

  }

}
