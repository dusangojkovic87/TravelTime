import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeVideoComponent } from './components/home-video/home-video.component';
import { HomeComponent } from './pages/home/home.component';
import { TourCardListComponent } from './components/tour-card-list/tour-card-list.component';
import { AboutUsCardComponent } from './components/about-us-card/about-us-card.component';
import { NewDestinationCardComponent } from './components/new-destination-card/new-destination-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeVideoComponent,
    HomeComponent,
    TourCardListComponent,
    AboutUsCardComponent,
    NewDestinationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
