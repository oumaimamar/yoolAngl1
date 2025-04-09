import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  // public saveNewUser (foemData: any): Observable<User>{
  //   return this.http.post<<User>>()
  // }
}
