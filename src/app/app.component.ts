import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div *ngIf="!hide" style="text-align:center">
      <p>{{ hero.name }}</p>
      <p>{{ hero.birthday }}</p>
      <p>{{ getShortcutName(hero) }}</p>
      <button (click)="revive()">revive</button>
      <input [value]="hero.name" (keyup)="updateHeroName($event)" />
      <button (click)="hideInfo()">Someone watches me</button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title: string = 'Workshop';
  hero = {
    name: 'Supermaan!',
    birthday: new Date('1997-09-29')
  };
  hide: boolean = false;

  // Use it to test your estday pipe
  today: Date = new Date();

  getShortcutName(hero) {
    return `${hero.name[0]}-${hero.birthday.getFullYear()}`;
  }

  revive() {
    this.hero.birthday = this.today;
  }

  hideInfo() {
    this.hide = true;
  }

  updateHeroName(e) {
    this.hero.name = e.target.value;
  }
}
