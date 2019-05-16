import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { DemoComponent } from './demo.component';
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [AppComponent, HighlightDirective, ReversePipe, DemoComponent],
  imports: [BrowserModule, EventsModule],
  providers: [],
  bootstrap: [AppComponent] // AppComponent // DemoComponent
})
export class AppModule {}
