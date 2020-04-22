import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
items;
shippingcosts;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.shippingcosts = this.cartService.getsp();
  }

}
