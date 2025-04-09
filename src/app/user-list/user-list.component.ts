import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, AfterViewInit {
  public users: any;
  public displayedColumns = ['userId','firstName','lastName','email','phone','ville','dateInscription','role'];
  public dataSource : any;


  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private profilesService : ProfileService ) {
  }
  ngOnInit() {
    this.profilesService.getAllUsers()
      .subscribe({
        next : value => {
          this.users = value;
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error : err => {
          console.log(err);
        }
      })
  }
  ngAfterViewInit() {}
}

