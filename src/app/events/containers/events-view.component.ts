import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-view',
  template: `
    <app-event-list [events]="events"></app-event-list>
  `,
  styles: []
})
export class EventsViewComponent implements OnInit {
  events: IEvent[] = [{ name: 'Event one' }, { name: 'Event two' }];
  constructor() {}

  ngOnInit() {}
}
