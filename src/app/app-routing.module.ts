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
import {ExperienceFormComponent} from './experience-form/experience-form.component';
import {ExperienceListComponent} from './experience-list/experience-list.component';
import {ExperienceComponent} from './experience/experience.component';
import {DocumentListComponent} from './document-list/document-list.component';
import {DocumentFormComponent} from './document-form/document-form.component';
import {FormationListComponent} from './formation-list/formation-list.component';
import {FormationFormComponent} from './formation-form/formation-form.component';
import {CertificationFormComponent} from './certification-form/certification-form.component';
import {CertificationListComponent} from './certification-list/certification-list.component';
import {SkillFormComponent} from './skill-form/skill-form.component';
import {SkillListComponent} from './skill-list/skill-list.component';

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

      { path:"document-form",component: DocumentFormComponent},
      { path:"document-list",component: DocumentListComponent},

      { path:"experience-form",component: ExperienceFormComponent},
      { path:"experience-list",component: ExperienceListComponent},

      { path:"formation-form",component: FormationFormComponent},
      { path:"formation-list",component: FormationListComponent},

      { path:"certification-form",component: CertificationFormComponent},
      { path:"certification-list",component: CertificationListComponent},

      { path:"skill-form",component: SkillFormComponent},
      { path:"skill-list",component: SkillListComponent},

    ] },



  { path:"experience",component: ExperienceComponent},



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
