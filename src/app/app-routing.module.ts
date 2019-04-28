import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayAnimalComponent } from './play-animal/play-animal.component';
import { PlayCountryComponent } from './play-country/play-country.component';
import { PlayFootballComponent } from './play-football/play-football.component';
import { PlayFruitComponent } from './play-fruit/play-fruit.component';

const routes: Routes = [  
  { path: 'memory-game', component: HomeComponent },  
  { path: 'play-animal', component: PlayAnimalComponent },  
  { path: 'play-country', component: PlayCountryComponent },  
  { path: 'play-football', component: PlayFootballComponent },  
  { path: 'play-fruit', component: PlayFruitComponent },  
  { path: '', redirectTo: '/memory-game', pathMatch: 'full' },  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
