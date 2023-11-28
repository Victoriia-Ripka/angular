import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HelloWorldListComponent, CardComponent, MessageComponent } from "../components/index"
import { Page1Component, Page2Component, Page3Component, Page4Component, ChapterComponent, Counter, TimerComponent } from "./index"
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [CommonModule, MatCardModule],
    declarations: [Page1Component, Page2Component, Page3Component, Page4Component, 
        HelloWorldListComponent, CardComponent, TimerComponent, 
        ChapterComponent, Counter, MessageComponent
    ],
    exports: [Page1Component, Page2Component, Page3Component, Page4Component]
})
export class PagesModule { }