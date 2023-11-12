import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: "timer",
    templateUrl: "timer.component.html",
    styleUrls: ["timer.component.css"]
})
export class TimerComponent {
    interval: number = 1000


    onStart() {

    }

    onStop() {

    }
}