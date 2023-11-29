import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HelloWorldListComponent, CardComponent, MessageComponent, NgClassComponent, NgStyleComponent, NgModelComponent } from "../components/index"
import { Page1Component, Page2Component, Page3Component, Page4Component, ChapterComponent, Counter, TimerComponent } from "./index"
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [CommonModule, MatCardModule, NgClassComponent],
    declarations: [Page1Component, Page2Component, Page3Component, Page4Component, 
        HelloWorldListComponent, CardComponent, TimerComponent,
        ChapterComponent, Counter, MessageComponent, NgStyleComponent, NgModelComponent
    ],
    exports: [Page1Component, Page2Component, Page3Component, Page4Component]
})
export class PagesModule { }