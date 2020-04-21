import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import { PRODUCTS } from '../productsData';
import { Products} from '../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('product added');
  }
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
