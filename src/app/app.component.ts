import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentService } from './services/content.service';
import { Section } from './interfaces/section';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public sectionsData: Array<Section>;
  public heroSectionContent: Section;
  public menuSectionContent: Section;
  public servicesSectionContent: Section;
  public offerSectionContent: Section;
  public coachesSectionContent: Section;
  public editedSectionContent: Section;
  public isLoading: boolean = false;
  public isPopupOpen: boolean = false;
  public isAdmin: boolean = false;
  public isLoginPopup: boolean = false;
  public isEditorPopup: boolean = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getContentData();
  }

  public getContentData(): void {
    this.isLoading = true;
    <Subscription>this.contentService.getData().subscribe((data: any) => {
      this.sectionsData = data.content;
      this.initSections();
      this.isLoading = false;
    });
  }

  private getSectionContent(type): Section {
    return this.sectionsData.find((section) => section.type === type);
  }

  private initSections(): void {
    this.heroSectionContent = this.getSectionContent('info');
    this.menuSectionContent = this.getSectionContent('navigation');
    this.servicesSectionContent = this.getSectionContent('service');
    this.offerSectionContent = this.getSectionContent('offer');
    this.coachesSectionContent = this.getSectionContent('coach');
  }

  public closePopup(event: boolean): void {
    this.isPopupOpen = event;
    this.isLoginPopup = false;
    this.isEditorPopup = false;
  }

  public openLoginPopup(): void {
    this.isPopupOpen = true;
    this.isLoginPopup = true;
  }

  public openEditorPopup(event: Section): void {
    this.editedSectionContent = event;
    this.isPopupOpen = true;
    this.isEditorPopup = true;
  }

  public LogOut() {
    localStorage.removeItem('accessToken');
    this.isAdmin = false;
  }
}
