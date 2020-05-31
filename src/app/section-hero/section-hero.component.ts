import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../interfaces/section'

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss']
})
export class SectionHeroComponent implements OnInit {

  @Input() content: Section
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openPopup(): void {
    this.onClick.emit(true);
  }

}
