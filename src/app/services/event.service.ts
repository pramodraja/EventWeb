import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
import { HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public events: Event[] = [];
  constructor(private http:HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.apiUrl + '/Events');
  } 

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(environment.apiUrl + `/Events/${id}`)
  }
}

