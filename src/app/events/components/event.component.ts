import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <p>
      {{ event.name }}
    </p>
  `,
  styles: []
})
export class EventComponent implements OnInit {
  @Input() event: IEvent;
  constructor() {}

  ngOnInit() {}
}
