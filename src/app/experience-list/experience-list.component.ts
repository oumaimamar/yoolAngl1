import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DocumentService} from '../services/document.service';
import {Router} from '@angular/router';
import {ExperienceService} from '../services/experience.service';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../models/user.model';

@Component({
  selector: 'app-experience-list',
  standalone: false,
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent  implements OnInit {
  public experiences: any;
  displayedColumns: string[] = ['id', 'post', 'typeEmploi', 'entreprise','dateDebut', 'dateFin', 'ville','description','userId','actions','share'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.experienceService.getAllExperiences().subscribe({
      next: (value) => {
        this.experiences = value;
        this.dataSource = new MatTableDataSource(this.experiences);
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
    this.router.navigateByUrl("/experience-form")
  }


}
