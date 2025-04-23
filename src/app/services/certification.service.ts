import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation} from '../models/formation.model';
import {environment} from '../../environments/environment';
import {Certification, CertificationDTO} from '../models/certification.model';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  // List certification  -----------------------------------------------------
  getAllCertification(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${environment.backendHost}/AllCertifications`);
  }


  // Add certification  -----------------------------------------------------
  addCertification(certificationDTO: CertificationDTO): Observable<Certification> {
    return this.http.post<Certification>(`${environment.backendHost}/AddNewCertification`, certificationDTO);
  }


  // Delete certification  -----------------------------------------------------
  deleteCertification(certificationId: number): Observable<string> {
    return this.http.delete<string>(`${environment.backendHost}/DeleteCertification/${certificationId}`, { responseType: 'text' as 'json' });
  }


}
