import {Component, OnInit} from '@angular/core';
import {User, UserProfileDTO} from '../models/user.model';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  usersDTO! : Array<UserProfileDTO>;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getAllUserProfile().subscribe({
      next : value => {
        this.usersDTO = value;
      },
      error : err => {
        console.log(err);
      }
    })
  }
}
