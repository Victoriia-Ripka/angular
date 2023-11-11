import { Component } from '@angular/core';
import { Phrase } from './phrase';

const PHRASES: Phrase[] = [
  {value: "Hello world!", language: "English"},
  {value: "Привіт, світ!", language: "Ukrainian"},
  {value: "Czesc, swiat!", language: "Polish"},
  {value: "Hola Mundo!", language: "Spanish"},
  {value: "Bonjour le monde!", language: "French"},
]

@Component({
  selector: 'hello-world-list',
  templateUrl: 'hello-world-list.component.html',
  styleUrls: ['hello-world-list.component.css']
})

export class HelloWorldListComponent {
  phraseList: Phrase[] = PHRASES;
  selectedPhraseLanguage: string = '';

  onSelect(selected: Phrase){
    this.selectedPhraseLanguage = selected.language;
  }
}
