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


  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${environment.backendHost}/AllExperiences`);
  }


  getExperiencesByUser(userId: number): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${environment.backendHost}/user/${userId}`);
  }


  addExperience(experienceDto: ExperienceDto): Observable<Experience> {
    return this.http.post<Experience>(`${environment.backendHost}/AddNewExperience`, experienceDto);
  }

  deleteExperience(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.backendHost}/deleteExperience/${id}`, { responseType: 'text' as 'json' });
  }

}
