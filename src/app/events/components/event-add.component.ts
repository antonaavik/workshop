import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-add',
  template: `
    <div>
      <input type="text" [value]="newEvent" (keyup)="update($event)" />
      <button *ngIf="newEvent" (click)="addEvent()">Add event</button>
    </div>
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

  addEvent() {
    this.add.emit({ name: this.newEvent });
    this.newEvent = '';
  }
}
