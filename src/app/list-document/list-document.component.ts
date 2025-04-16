import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-list-document',
  standalone: false,
  templateUrl: './list-document.component.html',
  styleUrl: './list-document.component.css'
})
export class ListDocumentComponent implements OnInit {
  documents: any[] = [];
  loading = false;
  errorMessage = '';

  // For the upload form (keep your existing form properties)
  documentDto = {
    titre: '',
    typeDoc: '',
    file: null as File | null
  };

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.loading = true;
    this.profileService.getAllDocuments().subscribe({
      next: (docs) => {
        this.documents = docs;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load documents';
        this.loading = false;
        console.error(err);
      }
    });
  }

}
