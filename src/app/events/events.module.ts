import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsViewComponent } from './containers/events-view.component';
import { EventComponent } from './components/event.component';
import { EventListComponent } from './components/event-list.component';
import { EventAddComponent } from './components/event-add.component';

@NgModule({
  declarations: [EventsViewComponent, EventComponent, EventListComponent, EventAddComponent],
  exports: [EventsViewComponent],
  imports: [CommonModule]
})
export class EventsModule {}
