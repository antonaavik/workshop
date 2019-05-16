import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsViewComponent } from './containers/events-view.component';
import { EventComponent } from './components/event.component';
import { EventListComponent } from './components/event-list.component';
import { EventAddComponent } from './components/event-add.component';
import { EventViewComponent } from './containers/event-view.component';

const routes: Routes = [
  {
    path: '',
    component: EventsViewComponent
  }
];

@NgModule({
  declarations: [
    EventsViewComponent,
    EventComponent,
    EventListComponent,
    EventAddComponent,
    EventViewComponent
  ],
  exports: [EventsViewComponent, EventViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class EventsModule {}
