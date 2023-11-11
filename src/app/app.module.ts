// рут модуль корневий компонент, потрібний щоб застосунок запустився
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HelloWorldListComponent } from './hello-world-list/hello-world-list.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

// декоратор визначає як модуль повинен правюувати
@NgModule({ 
  // всі дерективи, класи і компоненти, що ми створили
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HelloWorldListComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  // компоненти, що будуть видимі для інших модулів
  exports: [],
  // компоненти, що необхідні для роботи цього модуля
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
      {path: 'page3', redirectTo: "/", pathMatch: "full"}
    ])
  ],
  // сервіси, які даний модуль додає до всіх сервісів додатка 
  providers: [],
  // визначає кореневий компонент
  bootstrap: [AppComponent]
})
export class AppModule { }
