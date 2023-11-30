import { Component } from '@angular/core';
import { CounterService } from 'src/app/counter.service';


@Component({
  selector: 'counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css'],
  providers: [CounterService]
})
export class Counter1Component {
  private counterValue: number = this.counterService.counterValue

  constructor(private counterService: CounterService) {}

  get getCounterValue() {
    return this.counterValue
  }

  plusOne() {
    this.counterService.increment()
    this.counterValue = this.counterService.counterValue
  }

  minusOne() {
    this.counterService.decrement()
    this.counterValue = this.counterService.counterValue
  }
}
