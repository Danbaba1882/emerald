import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
items;
con;
id;
quan;
i;
index;
cartstorage = localStorage;
parray;
carray;
newinfo;
shippingcosts;
deleteitem(item){
console.log(item);
this.id = item.ProductId;
this.carray = JSON.parse(this.cartstorage.getItem('cartcontent'));
console.log(this.carray);
for (this.i = 0; this.i < this.carray.length; this.i++){
  if (this.carray[this.i].ProductId === this.id){
    this.index = this.carray.indexOf(this.carray[this.i]);
    console.log(this.index);
    this.carray.splice(this.index, 1);
// this.cartstorage.setItem('cartcontent', this.parray);
  }
}
this.cartstorage.setItem('cartcontent', JSON.stringify(this.carray));
this.con = JSON.parse(this.cartstorage.getItem('cartcontent'));
}
emptycart(){
  this.cartService.emptycart();
  this.con = JSON.parse(this.cartstorage.getItem('cartcontent'));
}

 onKey(event, cons){
  console.log(cons);
  cons.quantity = event.target.value;
  console.log(cons.quantity);
  this.id = cons.ProductId;
  this.parray = this.cartService.getItemss();
  for (this.i = 0; this.i < this.parray.length; this.i++){
    if (this.parray[this.i].ProductId === this.id){
this.parray[this.i].quantity = cons.quantity;
console.log(this.parray[this.i].quantity);
console.log(this.parray[this.i]);
// this.cartstorage.setItem('cartcontent', this.parray);
    }
  }
  this.cartstorage.setItem('cartcontent', JSON.stringify(this.parray));
}


  constructor(
    private cartService: CartService
  ) { }


  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.shippingcosts = this.cartService.getsp();
    this.con = this.cartService.getItemss();
    this.cartService.gettotal();
    this.con = JSON.parse(this.cartstorage.getItem('cartcontent'));
  }

}
