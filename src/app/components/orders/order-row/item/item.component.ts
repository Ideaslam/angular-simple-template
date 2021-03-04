import { Component, Input, OnInit, ɵConsole } from '@angular/core';
import { Item } from 'src/app/models/products/Item';
import { Product, ProductSearchCriteria } from 'src/app/models/products/product';
import { ProductService } from 'src/app/services/Product/product.service';

import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

const seconds = interval(1000);



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private productService: ProductService) {

  }

  @Input('item') item: Item;
  product: Product;
  img: string = "../../../../../assets/img/logo/logo-icon-footer.png"

  ngOnInit(): void {


    if (this.item.product_id != null) {
      
        this.GetOneProduct(this.item.product_id)
    
    }



  }



  GetOneProduct(id: number) {

    let criteria = new ProductSearchCriteria();
    criteria.ids = id.toString();
    this.productService.Get(criteria).subscribe(products => {
      this.product = products[0];
      this.img = this.product.images.length == 0 ? this.img : this.product.images[0].src;



    })
  }

}
