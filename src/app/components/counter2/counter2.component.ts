import { Component } from '@angular/core';

@Component({
  selector: 'counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component {
  // private counterValue: number = this.counterService.counterValue

  // constructor(private counterService: CounterService) {}

  get getCounterValue() {
    return this
  }

  plusOne() {
    // this.counterService.increment()
    // this.counterValue = this.counterService.counterValue
  }

  minusOne() {
    // this.counterService.decrement()
    // this.counterValue = this.counterService.counterValue
  }
}
