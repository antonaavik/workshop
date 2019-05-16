import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: IEvent[] = [
    { name: 'Event one' },
    { name: 'Event two' },
    { name: 'Event three' },
    { name: 'Event four' },
    { name: 'Event five' },
    { name: 'Event six' },
    { name: 'Event seven' },
    { name: 'Event eight' }
  ];
  constructor() {}

  getData() {
    return this.events;
  }

  add(event: IEvent) {
    this.events.push(event);
  }

  getEvent(id) {
    return this.events[id];
  }
}
