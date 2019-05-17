import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>Welcome to {{ title }}</h1>
      <h1>Welcome to {{ today }}</h1>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title: string = 'Workshop';
  hero = {
    name: 'Type-here-your-hero-name',
    birthday: new Date()
  };

  // Use it to test your estday pipe
  today: Date = new Date('02-04-2019');
}
