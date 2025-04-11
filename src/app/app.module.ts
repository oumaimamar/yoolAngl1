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
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {AuthGuard} from './guards/auth.guard';
import {AuthorizationGuard} from './guards/authorization.guard';
import { ProjetFormComponent } from './projet-form/projet-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { TestComponent } from './test/test.component';
import { HomeRespComponent } from './home-resp/home-resp.component';
import { Test2Component } from './test-2/test-2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegiterComponent,
    Reg1Component,
    LinkedinPortfolioComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ProjetFormComponent,
    UserListComponent,
    TestComponent,
    HomeRespComponent,
    Test2Component
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
    MatCardModule,


    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,

  ],
  providers: [
    provideAnimationsAsync(),
    AuthGuard,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
