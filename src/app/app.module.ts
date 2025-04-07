import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegiterComponent } from './regiter/regiter.component';
import { Reg1Component } from './reg1/reg1.component';

import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import { LinkedinPortfolioComponent } from './linkedin-portfolio/linkedin-portfolio.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegiterComponent,
    Reg1Component,
    LinkedinPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,



    MatIconModule,
    MatSelectModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
