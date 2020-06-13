import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.scss'],
})
export class SectionServicesComponent implements OnInit {
  @Input() content: Section;
  @Input() isAdmin: Boolean;
  @Output() onClick: EventEmitter<Section> = new EventEmitter<Section>();

  constructor() {}

  ngOnInit(): void {}

  public openEditor(): void {
    this.onClick.emit(this.content);
  }
}
