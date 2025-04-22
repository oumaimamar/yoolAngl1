import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Experience, ExperienceDto} from '../models/experience.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) {
  }

  // List experience  -----------------------------------------------------
  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${environment.backendHost}/AllExperiences`);
  }

  // List experience By userId  -----------------------------------------
  getExperiencesByUser(userId: number): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${environment.backendHost}/AllExperiencesByUserId/${userId}`);
  }

  // Add experience  -----------------------------------------------------
  addExperience(experienceDto: ExperienceDto): Observable<Experience> {
    return this.http.post<Experience>(`${environment.backendHost}/AddNewExperience`, experienceDto);
  }

  // Delete experience  -----------------------------------------------------
  deleteExperience(experienceId: number): Observable<string> {
    return this.http.delete<string>(`${environment.backendHost}/DeleteExperience/${experienceId}`, { responseType: 'text' as 'json' });
  }

}
