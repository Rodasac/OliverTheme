import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {routes} from './app.routing';
import { HeaderComponent } from './home-page/header/header.component';
import { AboutSectionComponent } from './home-page/about-section/about-section.component';
import { WorkSectionComponent } from './home-page/work-section/work-section.component';
import { CountersComponent } from './home-page/counters/counters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AboutSectionComponent,
    WorkSectionComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
