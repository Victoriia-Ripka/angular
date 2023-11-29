import { Component } from '@angular/core';

@Component({
  selector: 'ng-style',
  templateUrl: 'ng-style.component.html',
  styleUrls: ['ng-style.component.css']
})
export class NgStyleComponent {
  getStyles() {
    let styles = {
      "background-color": "yellow",
      "font-weight": "bold",
      "font-size": "20px"
    }
    return styles
  }
}
