import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegiterComponent} from './regiter/regiter.component';
import {Reg1Component} from './reg1/reg1.component';
import {LinkedinPortfolioComponent} from './linkedin-portfolio/linkedin-portfolio.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthorizationGuard} from './guards/authorization.guard';
import {ProjetFormComponent} from './projet-form/projet-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {TestComponent} from './test/test.component';
import {HomeRespComponent} from './home-resp/home-resp.component';
import {Test2Component} from './test-2/test-2.component';
import {DocumentComponent} from './document/document.component';
import {NewDocumentComponent} from './new-document/new-document.component';
import {ListDocumentComponent} from './list-document/list-document.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },


  { path: "nav", component: NavComponent,
    canActivate :[AuthGuard],
    children:[
      { path: "home", component: HomeComponent},
      { path: "home-resp", component: HomeRespComponent},

      { path:"portfolio",component: LinkedinPortfolioComponent},

      { path: "projetForm", component: ProjetFormComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['RESP'] }
      },

      { path: "userList", component: UserListComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['RESP'] }
      },

    ] },

  { path:"newDoc",component: NewDocumentComponent},
  { path:"listDoc",component: ListDocumentComponent},

  { path:"doc",component: DocumentComponent},


  { path:"register",component: RegiterComponent},
  { path:"reg1",component: Reg1Component},


  { path: "test", component: TestComponent },
  { path: 'test-2/:userId', component: Test2Component }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
