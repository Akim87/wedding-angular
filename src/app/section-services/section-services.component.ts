import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section'

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.scss']
})
export class SectionServicesComponent implements OnInit {

  @Input() content: Section

  constructor() { }

  ngOnInit(): void {
  }

}
