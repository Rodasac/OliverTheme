import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {routes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
