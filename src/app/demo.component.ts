import {Component, OnInit} from '@angular/core';
import {EventsService} from './events/events.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Data and event binding</h1>
    <p><strong>Expressions</strong></p>
    <!-- The text between the braces is often the name of a component property -->
    <!-- Angular replaces that name with the string value of the corresponding component property. -->
    <div>{{ title }}</div>
    <!-- Angular first evaluates template expression and then converts to a string. -->
    <div>{{ someNumber + 2 }}</div>
    <!-- Expression can invoke methods of the host component such as getTitle() -->
    <div>{{ getTitle() }}</div>
    <p><strong>Property binding</strong></p>
    <!-- Property binding sets a value from a component's data property into a target element property. -->
    <!-- Ex: [element property]=”expression” -->
    <div [innerHtml]="title"></div>
    <div><input type="text" [value]="title" /></div>
    <div><input type="text" [value]="getTitle()" /></div>
    <p><strong>Event binding</strong></p>
    <!-- Event binding listens for events and calls the component's method whenever event gets triggered. -->
    <!-- Ex: (event name)=”template statement” -->
    <div><input type="string" [value]="title" (keyup)="updateTitle($event)" /></div>
    <div><button (click)="save()">Save</button></div>
    <p><strong>Structural directives</strong></p>
    <!-- Iterate over something like an array or an object and create a template for each item. -->
    <div *ngFor="let item of items">{{ item.name }}</div>
    <!-- Removes or recreates a portion of the DOM tree based on an {expression} value. -->
    <div *ngIf="!isVisible"><button (click)="showContent()">show content</button></div>
    <div *ngIf="isVisible">
      <button (click)="hideContent()">hide content</button>
      <p>
        Content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quam, numquam
        amet non quasi hic! Placeat accusantium doloribus animi eaque cumque maiores, explicabo
        veniam saepe atque labore enim, velit ipsa.
      </p>
    </div>
    {{ eventsDataLayer | json }}
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DemoComponent implements OnInit {
  title: string = 'Hello';
  someNumber: number = 4;
  isVisible: boolean = false;
  items: Array<{name: string}> = [{name: 'for item 1'}, {name: 'for item 2'}];

  eventsDataLayer: IEvent[];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsDataLayer = this.eventsService.getData();
  }

  getTitle(): string {
    return 'Method title';
  }

  // Event binding
  updateTitle(e) {
    this.title = e.target.value;
  }

  save() {
    alert('Saved!');
  }

  // Structural directives
  showContent() {
    this.isVisible = true;
  }

  hideContent() {
    this.isVisible = false;
  }
}
