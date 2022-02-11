import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'] 
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.navSlide()
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
