import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListRoutingModule } from './event-list-routing.module';
import { EventListComponent } from './event-list.component';
import { EventService } from '../../services/event.service';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    EventListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    EventListRoutingModule
  ],
  providers: [
    EventService
  ]
})
export class EventListModule { }
