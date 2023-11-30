import { Component } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent {
  visible: boolean = true

  hide(): void {
    this.visible = false
  }
}
