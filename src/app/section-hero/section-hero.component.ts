import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
})
export class SectionHeroComponent implements OnInit {
  @Input() content: Section;

  constructor() {}

  ngOnInit(): void {}
}
