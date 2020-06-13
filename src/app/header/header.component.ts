import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from '../interfaces/section';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() content: Section;
  @Input() isAdmin: Boolean;
  @Output() onSignInClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSignOutClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  isScrolled: boolean = false;

  ngOnInit(): void {
    document.addEventListener('scroll', (): void => {
      this.isScrolled = Boolean(window.top.scrollY);
    });
  }

  public openLoginPopup(): void {
    this.onSignInClick.emit();
  }

  public LogOut(): void {
    this.onSignOutClick.emit();
  }
}
