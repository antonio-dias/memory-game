import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayFootballComponent } from './play-football/play-football.component';
import { PlayCountryComponent } from './play-country/play-country.component';
import { PlayAnimalComponent } from './play-animal/play-animal.component';
import { PlayFruitComponent } from './play-fruit/play-fruit.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayFootballComponent,
    PlayCountryComponent,
    PlayAnimalComponent,
    PlayFruitComponent,
    HomeComponent
  ],
  imports: [BrowserModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
