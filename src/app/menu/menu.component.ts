import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: { title: string, link: string }[] = [
    {
      title: "Services",
      link: '#services',
    },
    {
      title: "Our Coaches",
      link: '#coaches',
    },
    {
      title: "Testimonials",
      link: '#testimonials',
    },
    {
      title: "FAQ",
      link: '#faq',
    },
    {
      title: "Lesson Review",
      link: '#review',
    },
  ]

}
