import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0

  constructor() { }

  increment() {
    this.counter++
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--
    }
  }

  get counterValue() {
    return this.counter
  }
}
