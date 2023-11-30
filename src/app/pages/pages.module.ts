import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MatCardModule } from '@angular/material/card';

import {
    HelloWorldListComponent, CardComponent, MessageComponent,
    NgClassComponent, NgStyleComponent, NgModelComponent, ChooseIceCreameComponent,
    Counter1Component, Counter2Component
} from "../components/index"
import { Page1Component, Page2Component, Page3Component, Page4Component, ChapterComponent, Counter, TimerComponent } from "./index"


@NgModule({
    imports: [CommonModule, MatCardModule, NgClassComponent, ChooseIceCreameComponent],
    declarations: [Page1Component, Page2Component, Page3Component, Page4Component,
        HelloWorldListComponent, CardComponent, TimerComponent,
        ChapterComponent, Counter, MessageComponent, NgStyleComponent, NgModelComponent,
        Counter1Component, Counter2Component
    ],
    exports: [Page1Component, Page2Component, Page3Component, Page4Component]

})
export class PagesModule { }