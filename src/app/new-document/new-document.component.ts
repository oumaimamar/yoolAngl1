import { Component } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {DocumentService} from '../services/document.service';

@Component({
  selector: 'app-new-document',
  standalone: false,
  templateUrl: './new-document.component.html',
  styleUrl: './new-document.component.css'
})
export class NewDocumentComponent {
  documentDto = {
    titre: '',
    typeDoc: '',
    file: null as File | null  // Explicitly type as File or null
  };



  uploadMessage: string = '';
  isUploading: boolean = false;
  uploadStatus!: string;

  constructor(private documentService: DocumentService) { }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.documentDto.file = event.target.files[0];
    } else {
      this.documentDto.file = null;
    }
  }

  onSubmit() {
    if (!this.documentDto.file) {
      this.uploadMessage = 'Please select a file';
      return;
    }

    const formData = new FormData();
    formData.append('titre', this.documentDto.titre);
    formData.append('typeDoc', this.documentDto.typeDoc);
    // Use non-null assertion (!) since we checked for null above
    formData.append('filePath', this.documentDto.file!);

    this.isUploading = true;
    this.uploadMessage = 'Uploading...';

    this.documentService.uploadDocument(formData).subscribe(
      (response) => {
        this.isUploading = false;
        this.uploadMessage = 'Upload successful!';
        console.log('Upload successful', response);
        // Reset form after successful upload if needed
        this.documentDto = {
          titre: '',
          typeDoc: '',
          file: null
        };
      },
      (error) => {
        this.isUploading = false;
        this.uploadMessage = 'Upload failed. Please try again.';
        console.error('Upload failed', error);
      }
    );
  }

}
