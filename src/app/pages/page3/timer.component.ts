import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: "timer",
    templateUrl: "timer.component.html",
    styleUrls: ["timer.component.css"]
})
export class TimerComponent {
    private intervalObject: any
    public currentValue: number = 0

    @Input()
    interval: number = 1000

    // EventEmitter - визначає, що властивість є подією
    @Output()
    tick: EventEmitter<number> = new EventEmitter()

    onStart() {
        if (this.intervalObject) return
        this.intervalObject = setInterval(() => this.callback(), this.interval)
    }

    onStop() {
        if (!this.intervalObject) return
        clearInterval(this.intervalObject)
        this.intervalObject = false
    }

    // розібратися як emit в компоненті і EventEmitter пов'язані з event i timerHandler на сторінці
    private callback() {
        this.currentValue += 1
        this.tick.emit(this.currentValue)
    }
}