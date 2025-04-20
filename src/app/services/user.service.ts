import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  //----------ListAllUsers-------------
  public getAllUsers():Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.backendHost}/users`)
  }

  //----------AddNewUser-------------
  public newUser(formData:any):Observable<User>{
    return this.http.post<User>(`${environment.backendHost}/users/addUser`,formData)
  }

  //----------DeleteUserById-------------
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${environment.backendHost}/users/deleteUser/${userId}`);
  }



}
