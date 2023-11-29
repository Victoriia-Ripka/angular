import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'choose-ice-creame',
  templateUrl: 'choose-ice-creame.component.html',
  styleUrls: ['choose-ice-creame.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ChooseIceCreameComponent {
  topping: string = 'Vanile'
}
