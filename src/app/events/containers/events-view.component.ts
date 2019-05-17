import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-view',
  template: `
    <app-event-list [events]="events"></app-event-list>
    <app-event-add (add)="add($event)"></app-event-add>
  `,
  styles: []
})
export class EventsViewComponent implements OnInit, OnDestroy {
  events: IEvent[] = [];
  lifecycleTest = null;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events = this.eventsService.getData();
    this.lifecycleTest = setInterval(() => console.log(new Date()), 1000);
  }

  add(event: IEvent) {
    this.eventsService.add(event);
    // this.events.push(event);
  }

  ngOnDestroy() {
    clearInterval(this.lifecycleTest);
  }
}
