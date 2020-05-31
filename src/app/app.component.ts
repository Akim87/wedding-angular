import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeddingApiService } from './wedding-api.service';
import { Section } from './interfaces/section'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sectionsData: Array<Section>;
  public heroSectionContent: Section;
  public menuSectionContent: Section;
  public servicesSectionContent: Section;
  public offerSectionContent: Section;
  public coachesSectionContent: Section;
  public isLoading: boolean = false;
  public isPopupOpen: boolean = false;

  constructor(private weddingApiService: WeddingApiService) { }

  ngOnInit(): void {
    this.getContentData();
  }

  private getContentData(): void{
    this.isLoading = true;
    <Subscription>this.weddingApiService.getData()
      .subscribe((data: any) => {
        this.sectionsData = data.content;
        this.initSections();
        this.isLoading = false;
      })
  }

  private getSectionContent(type): Section {
    return this.sectionsData.find((section) => section.type === type)
  }

  private initSections(): void {
    this.heroSectionContent = this.getSectionContent('info');
    this.menuSectionContent = this.getSectionContent('navigation');
    this.servicesSectionContent = this.getSectionContent('service');
    this.offerSectionContent = this.getSectionContent('offer');
    this.coachesSectionContent = this.getSectionContent('coach');
  }

  public togglePopup(event: boolean): void {
    this.isPopupOpen = event;
  }
}
