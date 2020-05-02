import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService} from '../cart.service';
import { PRODUCTS } from '../productsData';
import { Products} from '../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id;
  quantity = 1;
  quan;
  index;
  products = PRODUCTS;
  getinput(event){
 //   console.log(event.target.value);
 //   return event.target.value;
    }
  addToCart(product){
    product.quantity = this.quantity;
    this.cartService.addToCart(product);
    console.log('added');
  }

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
