import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  inputs: ["firstname", "lastname"]
})
export class CardComponent {
  firstname: string | undefined 

  private _lastname: string | undefined 
  set lastname(value: string) {
    this._lastname = value
  }
  get lastname(): string | undefined {
    return this._lastname
  }

  get fullname(): string {
    return this.firstname + " " + this.lastname
  }
}
