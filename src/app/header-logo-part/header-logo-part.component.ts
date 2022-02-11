import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header-logo-part',
  templateUrl: './header-logo-part.component.html',
  styleUrls: ['./header-logo-part.component.css']
})
export class HeaderLogoPartComponent implements OnInit, AfterViewInit {
  @ViewChild('left') left: ElementRef;
  @ViewChild('right') right: ElementRef;

  constructor() { }

  ngOnInit(): void {
   
  }
  
  ngAfterViewInit(): void {      
    this.animateletandright() 
  }

  animateletandright(){

     gsap.from(this.left.nativeElement , { duration: 2, x: -200})
     gsap.from(this.right.nativeElement, {  duration: 2, x: 200})
  } 

  
   
}
