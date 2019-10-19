import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'event-list',
    pathMatch: 'full'
  },  
  {
    path: 'event-list',
    loadChildren: './components/event-list/event-list.module#EventListModule'
  },    
  {
    path: 'event-detail',
    loadChildren: './components/event-detail/event-detail.module#EventDetailModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
