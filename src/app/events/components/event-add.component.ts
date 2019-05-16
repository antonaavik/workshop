import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-add',
  template: `
    <form (submit)="addEvent($event)">
      <input type="text" [value]="newEvent" (keyup)="update($event)" />
      <button [disabled]="!newEvent">Add event</button>
    </form>
  `,
  styles: []
})
export class EventAddComponent implements OnInit {
  @Output() add: EventEmitter<IEvent> = new EventEmitter();
  newEvent: string = '';

  constructor() {}

  ngOnInit() {}

  update(e) {
    this.newEvent = e.target.value;
  }

  addEvent(e) {
    e.preventDefault();
    this.add.emit({ name: this.newEvent });
    this.newEvent = '';
  }
}
