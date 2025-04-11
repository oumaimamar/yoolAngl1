import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, Observable, throwError} from 'rxjs';
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

  getUserProfile(userId: string): Observable<UserProfileDTO> {
    return this.http.get<UserProfileDTO>(`${environment.backendHost}/userProfiles/${userId}`).pipe(
      catchError(error => {
        console.error('Error fetching user profile:', error);
        return throwError(() => new Error('Failed to fetch user profile'));
      })
    );
  }

}
