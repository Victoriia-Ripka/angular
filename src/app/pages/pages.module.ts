import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HelloWorldListComponent, CardComponent } from "../components/index"
import { Page1Component, Page2Component, Page3Component, ChapterComponent, Counter, TimerComponent } from "./index"

@NgModule({
    imports: [CommonModule],
    declarations: [Page1Component, Page2Component, Page3Component, 
        HelloWorldListComponent, CardComponent, TimerComponent, 
        ChapterComponent, Counter],
    exports: [Page1Component, Page2Component, Page3Component]
})
export class PagesModule { }