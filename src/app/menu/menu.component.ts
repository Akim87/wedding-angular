import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() content: Section

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
