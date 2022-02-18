import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'] 
})
export class ToolbarComponent implements OnInit{
   
  badgeStatus: boolean 

   
  constructor(private location: Location,private productsService: ProductsService, public cartService: CartService, private route: Router) { }
  
  

  ngOnInit(): void {
    // this.navSlide()
  }
  setMatTab(){
    this.productsService.matTab = 0
  }
  goToCart(){
    this.route.navigate(['/cart'])
    this.cartService.inCart  = true
    this.cartService.noToolbar = true
  }

  stepBack(){
    this.cartService.noToolbar = false
    if (this.cartService.inCart) {
      this.cartService.inCart = false
    }
    if (this.cartService.noToolbar) {
      this.cartService.noToolbar =false
      
    }
    if(this.cartService.fromDetails){
      this.route.navigate(['/jewelries'])
      this.cartService.fromDetails = false
    }else{
      this.location.back()
    }
    
  }

  navSlide() {
    
    const burg = document.querySelector('.burger')
    const nav = document.querySelector('.toolbar-nav');
    const lis = document.querySelectorAll('.toolbar-nav li') as NodeListOf<HTMLElement>

    burg.classList.toggle('toggle')

    lis.forEach((li, index) => {
      if (li.style.animation) {
        li.style.animation = ''
      } else {
        li.style.animation = `navLinksFade 0.5s ease forwards ${index / 9 + 0.15}s`
      }
    });


    nav.classList.toggle('nav-active');




  }
}
