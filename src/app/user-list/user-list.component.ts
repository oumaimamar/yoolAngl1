import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ProfileService} from '../services/profile.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  public users: any;
  displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'email', 'phone', 'ville', 'dateInscription', 'role', 'actions','share'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private profilesService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.profilesService.getAllUsers().subscribe({
      next: (value) => {
        this.users = value;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  viewInfo(user: User) {
    this.router.navigateByUrl(`/test-2/${user.userId}`);
  }

  sendWarning(user: User) {
    console.log("Sending warning to:", user.firstName);
    // Add your logic here
  }

  deleteUser(user: User) {
    if (confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) {
      if (user.userId != null) {
        this.profilesService.deleteUser(user.userId).subscribe({
          next: () => {
            // Remove the deleted user from the local array
            this.users = this.users.filter((u: User) => u.userId !== user.userId);
            this.dataSource.data = this.users;
            console.log('User deleted successfully');
          },
          error: (err) => {
            console.error('Error deleting user:', err);
          }
        });
      }
    }
  }
}


