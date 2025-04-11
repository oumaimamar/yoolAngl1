import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../services/profile.service';
import {UserProfileDTO} from '../models/user.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-test-2',
  standalone: false,
  templateUrl: './test-2.component.html',
  styleUrl: './test-2.component.css'
})
export class Test2Component implements OnInit{
  userId!: string;
  userProfile!: UserProfileDTO;  // Changed from array to single object
  isLoading = true;
  errorMessage = '';

  constructor(  private activatedRoute: ActivatedRoute,
                private profileService: ProfileService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('userId') || '';

      if (this.userId) {
        this.profileService.getUserProfile(this.userId).subscribe({
          next: (user) => {
            this.userProfile = user;
            this.isLoading = false;
          },
          error: (err) => {
            console.error(err);
            this.errorMessage = 'Failed to load user profile';
            this.isLoading = false;
          }
        });
      } else {
        this.errorMessage = 'No user ID provided';
        this.isLoading = false;
      }
    });
  }

}
