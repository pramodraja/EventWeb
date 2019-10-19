import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  public eventId: string;
  public eventDetail = <Event>{};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.eventId = params['id'];
      if (this.eventId !== undefined) {
        this.getEventDetailById(this.eventId);
      } 
    });     
  }

  getEventDetailById(id) {
    this.eventService.getEventById(parseInt(id)).subscribe(event => this.eventDetail = event);
  }  

  onClickBack() {
    this.router.navigate(['/event-list']);
  }
}
