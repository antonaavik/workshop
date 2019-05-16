import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-view',
  template: `
    <h2>
      {{ event.name }}
    </h2>
  `,
  styles: []
})
export class EventViewComponent implements OnInit {
  event: IEvent;
  constructor(private eventsService: EventsService, private route: ActivatedRoute) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('eventId');
    this.event = this.eventsService.getEvent(eventId);
  }
}
