import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsViewComponent } from './containers/events-view.component';
import { EventComponent } from './components/event.component';
import { EventListComponent } from './components/event-list.component';

@NgModule({
  declarations: [EventsViewComponent, EventComponent, EventListComponent],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
