import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegiterComponent} from './regiter/regiter.component';
import {Reg1Component} from './reg1/reg1.component';
import {LinkedinPortfolioComponent} from './linkedin-portfolio/linkedin-portfolio.component';

const routes: Routes = [

  { path:"register",component: RegiterComponent},
  { path:"reg1",component: Reg1Component},
  { path:"portfolio",component: LinkedinPortfolioComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
