import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit, AfterViewInit{
  responsiveOptions;

  @ViewChild('title') title: ElementRef;
  @ViewChild('seperator') seperator: ElementRef;
  @ViewChild('carousel') carousel: ElementRef;


  constructor(public productService: ProductsService) {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 2
    }];
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.animateAll()
  }

  ngOnInit(): void {
    this.getFeaturedProd()
  

      gsap.registerPlugin(ScrollTrigger, Draggable);
      this.animateAll()
    

  }


  animateAll() {
    gsap.from(this.title.nativeElement, {
      scrollTrigger: this.title.nativeElement,
      y: 60,
      duration: 1.5,
      opacity: 0

    });
    gsap.from(this.seperator.nativeElement, {
      scrollTrigger: this.seperator.nativeElement,
      y: 60,
      duration: 1.5,
      opacity: 0

    });
    gsap.from(this.carousel.nativeElement, {
      scrollTrigger: this.carousel.nativeElement,
      y: 60,
      duration: 1.5,
      opacity: 0

    });
  }



  getFeaturedProd() {
    this.productService.getProducts().subscribe(data => {
      this.productService.featuredProducts = data.map(p => {
        const data: any = p.payload.doc.data()
        return {
          id: p.payload.doc['id'],
          ...data

        } as Product;
      })
    })

  }

}
