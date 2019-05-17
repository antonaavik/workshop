import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  template: `
    <app-event
      *ngFor="let event of events; index as i"
      [event]="event"
      (click)="goTo(i)"
    ></app-event>
  `,
  styles: []
})
export class EventListComponent implements OnInit {
  @Input() events: IEvent[];
  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(index) {
    this.router.navigate([index]);
  }
}
