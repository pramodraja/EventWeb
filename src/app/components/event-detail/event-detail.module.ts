import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailComponent } from './event-detail.component';
import { EventService } from '../../services/event.service';
import { EventDetailRoutingModule } from './event-detail-routing.module';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    EventDetailRoutingModule
  ],
  providers: [
    EventService
  ]  
})
export class EventDetailModule { }
