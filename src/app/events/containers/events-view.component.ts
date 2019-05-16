import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-view',
  template: `
    <app-event-list [events]="events"></app-event-list>
    <app-event-add (add)="add($event)"></app-event-add>
  `,
  styles: []
})
export class EventsViewComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events = this.eventsService.getData();
  }

  add(event: IEvent) {
    this.eventsService.add(event);
    // this.events.push(event);
  }
}
