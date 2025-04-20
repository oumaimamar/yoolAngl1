import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {}


  // Upload document  -----------------------------------------------------
  uploadDocument(documentData: FormData): Observable<any> {
    return this.http.post(`${environment.backendHost}/document/uploadDocument`, documentData);
  }


  // List document  -----------------------------------------------------
  getAllDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${environment.backendHost}/document/allDocs`);}


  // download document  -----------------------------------------------------
  downloadDocument(id: number): Observable<Blob> {
    return this.http.get(`${environment.backendHost}/document/downloadDocument/${id}`, {
      responseType: 'blob'
    });
  }


}
