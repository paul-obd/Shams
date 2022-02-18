import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Order } from '../models/order.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart: Order[] = []

  total: number = 0

  inCart: boolean = false

  noToolbar:  boolean = false

  fromDetails: boolean = false

  constructor() { }

  doTotal(){
    this.total = 0
    this.cart.forEach(order => {
      this.total += order.total
    });
  }

  removeOrder(nb: number)
  {

    let order = this.cart.find(o => o.nb == nb)

    if(confirm(`Are you sure you want to delete ${order.product.name}`)){
   this.cart.splice(nb, 1)
 
    }else{

    }

    this.doTotal()



  }

}
