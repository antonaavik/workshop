import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Data and event binding</h1>
    <p><strong>Expressions</strong></p>
    <div>{{ title }}</div>
    <div>{{ someNumber + 2 }}</div>
    <div>{{ getTitle() }}</div>
    <p><strong>Property binding</strong></p>
    <div [innerHtml]="title"></div>
    <div><input type="text" [value]="title" /></div>
    <div><input type="text" [value]="getTitle()" /></div>
    <p><strong>Event binding</strong></p>
    <div><input type="string" [value]="title" (keyup)="updateTitle($event)" /></div>
    <div><button (click)="save()">Save</button></div>
    <p><strong>Structural directives</strong></p>
    <div *ngIf="!isVisible"><button (click)="showContent()">show content</button></div>
    <div *ngIf="isVisible">
      <button (click)="hideContent()">hide content</button>
      <p>
        Content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quam, numquam
        amet non quasi hic! Placeat accusantium doloribus animi eaque cumque maiores, explicabo
        veniam saepe atque labore enim, velit ipsa.
      </p>
    </div>
    <div *ngFor="let item of items">{{ item.name }}</div>
    <div></div>
  `,
  styles: []
})
export class DemoComponent implements OnInit {
  title: string = 'Hello';
  someNumber: number = 4;
  isVisible: boolean = false;
  items: Array<{ name: string }> = [{ name: 'for item 1' }, { name: 'for item 2' }];

  constructor() {}

  ngOnInit() {}

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
