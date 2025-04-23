import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Certification, CertificationDTO} from '../models/certification.model';
import {environment} from '../../environments/environment';
import {Skill, SkillDTO} from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  // List Skills  -----------------------------------------------------
  getAllSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.backendHost}/AllSkills`);
  }


  // Add Skill  -----------------------------------------------------
  addSkill(skillDTO: SkillDTO): Observable<Skill> {
    return this.http.post<Skill>(`${environment.backendHost}/AddNewSkill`, skillDTO);
  }


  // Delete Skill  -----------------------------------------------------
  deleteSkill(skillId: number): Observable<string> {
    return this.http.delete<string>(`${environment.backendHost}/DeleteSkill/${skillId}`, { responseType: 'text' as 'json' });
  }

}
