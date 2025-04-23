import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation, FormationDTO} from '../models/formation.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  // List formation  -----------------------------------------------------
  getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${environment.backendHost}/AllFormations`);
  }

  // Add formation  -----------------------------------------------------
  addFormation(formationDTO: FormationDTO): Observable<Formation> {
    return this.http.post<Formation>(`${environment.backendHost}/AddNewFormation`, formationDTO);
  }


  // Delete formation  -----------------------------------------------------
  deleteFormation(formationId: number): Observable<string> {
    return this.http.delete<string>(`${environment.backendHost}/DeleteFormation/${formationId}`, { responseType: 'text' as 'json' });
  }


}
