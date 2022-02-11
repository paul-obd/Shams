import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";



@Component({
  selector: 'app-home-bracelet',
  templateUrl: './home-bracelet.component.html',
  styleUrls: ['./home-bracelet.component.css']
})
export class HomeBraceletComponent implements OnInit {

  @ViewChild('title') title: ElementRef;
  @ViewChild('seperator') seperator: ElementRef;
  @ViewChild('braceletRow') braceletRow: ElementRef;
 

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.animateAll()
  }

  animateAll(){
    gsap.from(this.title.nativeElement, {
      scrollTrigger: this.title.nativeElement, 
      y: 60,
      duration:1.5
      
    });
    gsap.from(this.seperator.nativeElement, {
      scrollTrigger: this.seperator.nativeElement,
      y: 60,
      duration:1.5
      
    });
    gsap.from(this.braceletRow.nativeElement, {
      scrollTrigger: this.braceletRow.nativeElement,
      y: 60,
      duration:1.5
      
    });




  }

}
