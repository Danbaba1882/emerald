import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import { PRODUCTS } from '../productsData';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  addTocart(product){
    this.cartService.addToCart(product);
    window.alert('prouct added');
  }
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
