import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-list',
  template: `
    <app-event></app-event>
  `,
  styles: []
})
export class EventListComponent implements OnInit {
  @Input() events: IEvent[];
  constructor() {}

  ngOnInit() {}
}
