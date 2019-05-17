import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { DemoComponent } from './demo.component';
import { EventsModule } from './events/events.module';

//Routing

import { RouterModule, Routes } from '@angular/router';
import { EventsViewComponent } from './events/containers/events-view.component';
import { EventViewComponent } from './events/containers/event-view.component';

const routes: Routes = [
  {
    path: '',
    component: EventsViewComponent
  },
  {
    path: ':eventId',
    component: EventViewComponent
  }
];

//End routing

@NgModule({
  declarations: [AppComponent, HighlightDirective, ReversePipe, DemoComponent],
  imports: [BrowserModule, EventsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent] // AppComponent // DemoComponent
})
export class AppModule {}
