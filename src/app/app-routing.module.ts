import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PlayComponent} from './play/play.component';

const routes: Routes = [  
  { path: 'memory-game', component: HomeComponent },  
  { path: '', redirectTo: '/memory-game', pathMatch: 'full' },  
  { path: 'play', component: PlayComponent },  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
