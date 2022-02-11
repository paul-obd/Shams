import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home-rings',
  templateUrl: './home-rings.component.html',
  styleUrls: ['./home-rings.component.css']
})
export class HomeRingsComponent implements OnInit , AfterViewInit {

  @ViewChild('title') title: ElementRef;
  @ViewChild('seperator') seperator: ElementRef;
  @ViewChild('ringRow') ringRow: ElementRef;
 

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
    gsap.from(this.ringRow.nativeElement, {
      scrollTrigger: this.ringRow.nativeElement,
      y: 60,
      duration:1.5
      
    });




  }



}


