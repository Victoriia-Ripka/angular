import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ng-class',
  templateUrl: 'ng-class.component.html',
  styleUrls: ['ng-class.component.css'],
  imports: [CommonModule, FormsModule]
})
export class NgClassComponent  {
  settings = {
    accent: false,
    error: true,
    highlighted: true
  }
}
