import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionOfferComponent } from './section-offer/section-offer.component';
import { SectionCoachesComponent } from './section-coaches/section-coaches.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentService } from './services/content.service';
import { LoginService } from './services/login.service';
import { EditSectionService } from './services/editSection.service';
import { PopupComponent } from './popup/popup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EditorFormComponent } from './editor-form/editor-form.component';

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
    SectionCoachesComponent,
    PopupComponent,
    LoginFormComponent,
    EditorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ContentService, LoginService, EditSectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
