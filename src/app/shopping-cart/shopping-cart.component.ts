import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import { nbind } from 'q';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
items;
con;
quan;
nc;
nb;
qty;
i;
shippingcosts;
emptycart(){
  this.cartService.emptycart();
}

updatecart(qty){
  console.log('updated');
  this.nc = this.cartService.getItemss();
  for (this.i = 0; this.i < this.nc.length; this.i++){
    this.nb = this.nc[this.i].quantity;
    qty = this.nb;
    console.log(qty);
  }
}
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.shippingcosts = this.cartService.getsp();
    this.con = this.cartService.getItemss();
    this.updatecart(this.qty);
  }

}
