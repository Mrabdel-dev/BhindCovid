import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { CovidStatiqueComponent } from './covid-statique/covid-statique.component';
import { CovidChartComponent } from './covid-chart/covid-chart.component';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import { PostBlogComponent } from './blog/post-blog/post-blog.component';
const appRoutes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blogPost', component: PostBlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'covid', component: CovidStatiqueComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    ContactComponent,
    CovidStatiqueComponent,
    CovidChartComponent,
    PostBlogComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), FormsModule, Ng2GoogleChartsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
