import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartstorage = localStorage;
  total;
  i;
  items = [];
  createCart(){
    if (this.cartstorage){
    this.items = [];
    this.cartstorage.setItem('cartname', 'Angular Shopping Cart' );
    console.log('cart created');
    }
    else{
    console.log('there is something'); }
  }
getcartname(){
  console.log( this.cartstorage.getItem('cartname'));
}
  addToCart(product){
    // adding to angular cart
    this.items.push(product);
    // adding to sessionStorage shopping cart
    this.cartstorage.setItem('cartcontent', JSON.stringify(this.items));
  }
  // empties the session storage
  emptycart(){
    this.cartstorage.clear();
  }
  // getting items from angular shopping cart
  getItems(){
    return this.items;
  }
  // getting items from sessionStorage shopping cart
  getItemss(){
    const con = JSON.parse(this.cartstorage.getItem('cartcontent'));
    console.log( this.cartstorage.getItem('cartcontent'));
    console.log( con);
    return con;

  }

  gettotal(){
    const con = JSON.parse(this.cartstorage.getItem('cartcontent'));
    for (this.i = 0; this.i < con.length; this.i++){
      this.total += con[this.i].quantity * con[this.i].price;
      console.log(this.total);
      return this.total;
    }
  }
  // clearing shopping cart
  clearCart(){
    this.items = [];
    return this.items;
  }
// getting shipping cost
  getsp(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
