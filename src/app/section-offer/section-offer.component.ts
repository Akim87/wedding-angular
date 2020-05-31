import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../interfaces/section'

@Component({
  selector: 'app-section-offer',
  templateUrl: './section-offer.component.html',
  styleUrls: ['./section-offer.component.scss']
})
export class SectionOfferComponent implements OnInit {

  @Input() content: Section

  constructor() { }

  ngOnInit(): void {
  }

}
