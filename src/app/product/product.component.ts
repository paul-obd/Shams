import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() id: string
  @Input() category: string
  @Input() name: string
  @Input() img: string
  @Input() price: number


  constructor(private cart: CartService, private route: Router) { }

  ngOnInit(): void {
    
  }
 

  goToDetails(){
    
    this.cart.noToolbar = true
    this.cart.inCart = false
  
    this.route.navigate(['/details', this.id])

  }

  


}
