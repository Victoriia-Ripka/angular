// рут модуль корневий компонент, потрібний щоб застосунок запустився
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';

// декоратор визначає як модуль повинен правюувати
@NgModule({ 
  // всі дерективи, класи і компоненти, що ми створили
  declarations: [
    AppComponent,
    XyzComponent
  ],
  // інші модулі, які необхідні для роботи додатка
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // для кореневого модуля
  providers: [],
  // компонент,з якого починається робота нашого додатка
  bootstrap: [AppComponent]
})
export class AppModule { }
