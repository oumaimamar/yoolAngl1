import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserProfileDTO} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  // public saveNewUser (foemData: any): Observable<User>{
  //   return this.http.post<<User>>()
  // }

  public newUser(formData:any):Observable<User>{
    return this.http.post<User>(`${environment.backendHost}/newUser`,formData)
  }

}
