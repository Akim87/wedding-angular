import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-section-coaches',
  templateUrl: './section-coaches.component.html',
  styleUrls: ['./section-coaches.component.scss']
})
export class SectionCoachesComponent implements OnInit {

  @Input() content: Section

  constructor() { }

  ngOnInit(): void {
  }

}
