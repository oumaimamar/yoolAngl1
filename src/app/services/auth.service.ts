import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {


// Create Objet User
  public users:any ={
    admin : {password:'', roles: ['RESP','APP']},
    app : {password:'', roles: ['APP']},
    resp : {password:'', roles: ['RESP']},
  }


  //System Authen garde les Information
  public isAuthenticated : boolean = false;
  public username : any;
  public roles : string[] = [];


  constructor(private router : Router) { }


  public login(username:string, password:string): boolean{
    if(this.users[username] &&
      this.users[username]['password']==password){
      this.isAuthenticated = true;
      this.username = username;
      this.roles = this.users[username]['roles'];
      return true
    } else {
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.username = undefined;
    this.roles=[];
    this.router.navigateByUrl("/login")
  }
}
