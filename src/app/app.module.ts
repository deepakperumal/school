import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './view/home.component';
import{HeaderComponent} from './common/header.component'
import {FooterComponent} from './common/footer.component'
import{ClassComponent} from './view/class.component'
import{EventComponent} from './view/event.component'

import{AboutComponent } from './view/about.component'
import{ContactComponent}  from './view/contact.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClassComponent,
    EventComponent,
    AboutComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
