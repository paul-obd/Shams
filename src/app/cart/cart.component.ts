import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit , AfterContentInit{

  constructor(public cartService: CartService, private changeDetector: ChangeDetectorRef) { }
  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
   

  }

  checkout(){
    alert(`jeye tedfa3 ${this.cartService.total}$ w mam3ak alef b jebtak, khalas ensa`)
  }

}
