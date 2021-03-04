import { Component, OnInit } from '@angular/core';
import { Product, ProductSearchCriteria } from 'src/app/models/products/product';
import {ProductService} from 'src/app/services/Product/product.service' ;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    console.log('products') ;
    this.Get(this.searchCriteria);
  }

  product :Product;  
  products:Product[] ; 
  searchCriteria : ProductSearchCriteria ;
  


  Get(searchCriteria : ProductSearchCriteria){
    console.log('get')
    this.productService.Get(searchCriteria).subscribe( 
       data => this.products=data ,
       error => console.log('oops', error))
   }
 

   GetOne(id :number){
    this.productService.GetOne(id).subscribe(product=>{
      this.product  =product;
      console.log(this.product);

    })
   }


}
