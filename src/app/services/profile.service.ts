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


  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${environment.backendHost}/userAccount/${userId}`);
  }

  // Update user document  -----------------------------------------------------

  uploadDocument(documentData: FormData): Observable<any> {
    return this.http.post(`${environment.backendHost}/upload`, documentData);
  }

  // List document  -----------------------------------------------------

  getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${environment.backendHost}/allDocs`);}


  downloadDocument(id: number): Observable<Blob> {
    return this.http.get(`${environment.backendHost}/download/${id}`, {
      responseType: 'blob'
    });
  }

}
