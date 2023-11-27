// рут модуль корневий компонент, потрібний щоб застосунок запустився
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './components';
import { PagesModule, routs } from './pages/index';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// декоратор визначає як модуль повинен правюувати
@NgModule({ 
  // всі дерективи, класи і компоненти, що ми створили
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  // компоненти, що будуть видимі для інших модулів
  exports: [],
  // компоненти, що необхідні для роботи цього модуля
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routs)
  ],
  // сервіси, які даний модуль додає до всіх сервісів додатка 
  providers: [],
  // визначає кореневий компонент
  bootstrap: [AppComponent]
})
export class AppModule { }
