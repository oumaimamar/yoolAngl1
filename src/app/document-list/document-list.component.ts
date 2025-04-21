import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DocumentService} from '../services/document.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../models/user.model';

@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {
  public documents: any;
  displayedColumns: string[] = ['id', 'titre', 'typeDoc', 'dateAjout', 'fileName','actions','userId','share'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private documentService: DocumentService,
    private router: Router
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

  viewInfo(user: User) {
    // this.router.navigateByUrl(`/test-2/${user.userId}`);
  }

  sendWarning(user: User) {
    // console.log("Sending warning to:", user.firstName);
    // Add your logic here
  }

  deleteUser(user: User) {
    // if (confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) {
    //   if (user.userId != null) {
    //     this.profilesService.deleteUser(user.userId).subscribe({
    //       next: () => {
    //         // Remove the deleted user from the local array
    //         this.users = this.users.filter((u: User) => u.userId !== user.userId);
    //         this.dataSource.data = this.users;
    //         console.log('User deleted successfully');
    //       },
    //       error: (err) => {
    //         console.error('Error deleting user:', err);
    //       }
    //     });
    //   }
    // }
  }


  openAddDocumentDialog() {
    this.router.navigateByUrl("/nav/document-form")
  }
}
