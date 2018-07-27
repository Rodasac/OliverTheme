import {Routes} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', component: AboutPageComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactPageComponent, pathMatch: 'full'}
];
