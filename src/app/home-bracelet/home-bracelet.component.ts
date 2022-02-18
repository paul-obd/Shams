import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-home-bracelet',
  templateUrl: './home-bracelet.component.html',
  styleUrls: ['./home-bracelet.component.css']
})
export class HomeBraceletComponent implements OnInit {

  @ViewChild('title') title: ElementRef;
  @ViewChild('seperator') seperator: ElementRef;
  @ViewChild('braceletRow') braceletRow: ElementRef;
 

  constructor(private productService: ProductsService, private route: Router) { }


  ngOnInit(): void {
    // gsap.registerPlugin(ScrollTrigger, Draggable);
    // this.animateAll()
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.animateAll()
  }

  routeToBracelets(){
    this.productService.matTab = 1
    this.route.navigate(['/jewelries'])

  }

  animateAll(){
    gsap.from(this.title.nativeElement, {
      scrollTrigger: this.title.nativeElement, 
      y: 60,
      duration:1.5,
      opacity:0
      
    });
    gsap.from(this.seperator.nativeElement, {
      scrollTrigger: this.seperator.nativeElement,
      y: 60,
      duration:1.5,
      opacity:0
      
    });
    gsap.from(this.braceletRow.nativeElement, {
      scrollTrigger: this.braceletRow.nativeElement,
      y: 60,
      duration:1.5,
      opacity:0
      
    });




  }

}
