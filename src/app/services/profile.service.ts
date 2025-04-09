import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User, UserProfileDTO} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  public getAllUsers():Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.backendHost}/users`)
  }

  public getAllUserProfile():Observable<Array<UserProfileDTO>>{
      return this.http.get<Array<UserProfileDTO>>(`${environment.backendHost}/userProfiles`)
  }

}
