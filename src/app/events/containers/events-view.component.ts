import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-view',
  template: `
    <app-event-list [events]="events"></app-event-list>
    <app-event-add (add)="add($event)"></app-event-add>
  `,
  styles: []
})
export class EventsViewComponent implements OnInit {
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

  ngOnInit() {}

  add(event: IEvent) {
    this.events.push(event);
  }
}
