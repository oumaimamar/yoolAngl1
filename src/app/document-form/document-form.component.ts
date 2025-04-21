import { Component } from '@angular/core';
import {DocumentService} from '../services/document.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-document-form',
  standalone: false,
  templateUrl: './document-form.component.html',
  styleUrl: './document-form.component.css'
})
export class DocumentFormComponent {
  documentDto = {
  titre: '',
  typeDoc: '',
  userId: null,
  filePath: null
};

  documentTypes = ['PDF', 'DOCX', 'XLSX', 'PPT', 'TXT'];
  users = [
    { userId: 1 },
    { userId: 2},
    // Add more users as needed
  ];

  uploadStatus = '';
  isLoading = false;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.documentDto.filePath = event.target.files[0];
  }

  uploadDocument() {
    if (!this.documentDto.userId || !this.documentDto.filePath) {
      this.uploadStatus = 'Please select a user and a file';
      return;
    }

    this.isLoading = true;
    this.uploadStatus = 'Uploading...';

    const formData = new FormData();
    formData.append('titre', this.documentDto.titre);
    formData.append('typeDoc', this.documentDto.typeDoc);
    formData.append('userId', this.documentDto.userId);
    formData.append('filePath', this.documentDto.filePath);

    this.http.post(`${environment.backendHost}/document/uploadDocument`, formData)
      .subscribe({
        next: (response) => {
          this.uploadStatus = 'Upload successful!';
          this.isLoading = false;
          // Reset form
          this.documentDto = {
            titre: '',
            typeDoc: '',
            userId: null,
            filePath: null
          };
        },
        error: (error) => {
          this.uploadStatus = 'Upload failed: ' + error.message;
          this.isLoading = false;
        }
      });
  }
}
