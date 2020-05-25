import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  isScrolled: boolean = false;

  ngOnInit(): void {
    document.addEventListener('scroll', ():void => {
      this.isScrolled = Boolean(window.top.scrollY)
    })
  }
}
