import {Component, OnInit} from '@angular/core';
import {User, UserProfileDTO} from '../models/user.model';
import {ProfileService} from '../services/profile.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  usersDTO! : Array<UserProfileDTO>;
  // dataSource! : MatTableDataSource<UserProfileDTO>;
  // displayedColumns : string[] = ['userId','firstName','lastName','email','phone','ville','role','headline','bio','photoUrl','location']

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getAllUserProfile().subscribe({
      next : value => {
        this.usersDTO = value;
        // this.dataSource= new MatTableDataSource<UserProfileDTO>(this.usersDTO);
      },
      error : err => {
        console.log(err);
      }
    })
  }
}
