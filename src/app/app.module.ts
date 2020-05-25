import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionOfferComponent } from './section-offer/section-offer.component';
import { SectionCoachesComponent } from './section-coaches/section-coaches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LogoComponent,
    SectionHeroComponent,
    SectionServicesComponent,
    SectionOfferComponent,
    SectionCoachesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
