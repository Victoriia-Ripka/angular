import { Component } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: 'page3.component.html',
  styleUrls: ['page3.component.css']
})
export class Page3Component {
  tickHandler1(value: any): void {
    console.log("Tick Handler 1 - ", value)
  }

  tickHandler2(value: any): void {
    console.log("Tick Handler 2 - ", value)
  }
}
