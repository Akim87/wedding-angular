import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() content: Section

  constructor() { }

  isScrolled: boolean = false;

  ngOnInit(): void {
    document.addEventListener('scroll', (): void => {
      this.isScrolled = Boolean(window.top.scrollY)
    })
  }
}
