import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DocumentService} from '../services/document.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../models/user.model';
import {Document, DocumentDto} from '../models/document.model';

@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {
  public documents: any;
  displayedColumns: string[] = ['id', 'titre', 'typeDoc', 'dateAjout', 'fileName','userId','actions','share'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private documentService: DocumentService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.documentService.getAllDocuments().subscribe({
      next: (value) => {
        this.documents = value;
        this.dataSource = new MatTableDataSource(this.documents);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  viewInfo(document: DocumentDto) {
  }

  sendWarning(document: DocumentDto) {
  }

  deleteDocument(document: Document) {
    if (confirm(`Are you sure you want to delete ${document.titre} ${document.dateAjout}?`)) {
      if (document.id != null) {
        this.documentService.deleteDocument(document.id).subscribe({
          next: () => {
            // Remove the deleted document from the local array
            this.documents = this.documents.filter((d: Document) => d.id !== document.id);
            this.dataSource.data = this.documents;
            console.log('User deleted successfully');
          },
          error: (err) => {
            console.error('Error deleting user:', err);
          }
        });
      }
    }
  }

  openAddDocumentDialog() {
    this.router.navigateByUrl("/nav/document-form")
  }
}
