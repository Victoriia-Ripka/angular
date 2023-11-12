import { Component, Input } from "@angular/core"

// щоб компонент отримував вхідні дані і робити прив'зку (декоратор @Input() або масив inputs: [])

@Component({
    selector: "counter",
    templateUrl: "counter.components.html",
    styleUrls: ["counter.component.css"],
    // inputs: ["name", "counterValue", "step"]
})
export class Counter {
    @Input()
    name: string = 'Default counter'

    @Input()
    counterValue: number = 0

    @Input('step') // stepв використовується у коді для прив'язки
    counterStep: number = 1 // counterStep використовується у класі

    increment(): void {
        this.counterValue += this.counterStep
    }
    
}