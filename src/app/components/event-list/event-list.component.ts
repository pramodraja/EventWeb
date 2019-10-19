import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public events: Event[] = [];
  tableColumns  :  string[] = ['title', 'date'];
  isLoading = true;

  constructor(private router: Router , private eventService: EventService ) { }
 
  ngOnInit() {
    this.loadAllEventList();
    this.isLoading = false;
  }

  loadAllEventList() {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
      this.isLoading = false;
    },
    error => this.isLoading = false
    );
  }  

  onClickEvent(row) {
    this.router.navigate(['/event-detail'], {queryParams:{id:row.id}});
  }

}
