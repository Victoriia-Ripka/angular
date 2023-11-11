import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HelloWorldListComponent } from "../components/index"
import { Page1Component, Page2Component, Page3Component } from "./index"

@NgModule({
    imports: [CommonModule],
    declarations: [Page1Component, Page2Component, Page3Component, HelloWorldListComponent],
    exports: [Page1Component, Page2Component, Page3Component]
})
export class PagesModule { }