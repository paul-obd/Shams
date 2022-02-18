import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'SHAMS';

  constructor(private route: Router, public cartService: CartService){}

  ngOnInit(): void {
    this.route.navigate(['/home'])
  }

 
}
