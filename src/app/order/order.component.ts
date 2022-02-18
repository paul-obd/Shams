import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  @Input() nb : number
  @Input() product: Product
  @Input() quantity: number
  @Input() total: number

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  remove(){

    this.cartService.removeOrder(this.nb)
    this.cdr.detectChanges()
    
  

  }

}
