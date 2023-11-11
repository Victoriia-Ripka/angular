import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // css selector, яких в ДОМ дереві замінюється на наш компонент
  templateUrl: 'app.component.html', // шлях до шаблону
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'My Angular routing app';
}
