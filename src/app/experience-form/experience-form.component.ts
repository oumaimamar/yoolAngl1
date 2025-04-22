import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExperienceService} from '../services/experience.service';
import {Experience, ExperienceDto, TypeEmploi, Ville} from '../models/experience.model';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-experience-form',
  standalone: false,
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.css'
})
export class ExperienceFormComponent implements OnInit, OnDestroy {
  experienceForm: FormGroup;
  employmentTypes = ['FreeLance', 'FullTime', 'PartTime', 'Contract', 'Internship'];
  cities = ['Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tangier', 'Other'];

  // Add these properties
  showSuccess = false;
  successMessage = '';
  redirectTimer: any;

  isErrorState = false;


  constructor(
    private fb: FormBuilder,
    private experienceService: ExperienceService,
    private router: Router
  ) {
    this.experienceForm = this.fb.group({
      post: ['', Validators.required],
      typeEmploi: ['FreeLance', Validators.required],
      entreprise: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [''],
      ville: ['Casablanca', Validators.required],
      description: ['', Validators.required],
      // userId: [2] // Assuming this is set based on logged-in user
      userId: ['', Validators.required],


    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.experienceForm.valid) {
      const experienceDto: ExperienceDto = this.experienceForm.value;

      userId: Number(experienceDto.userId), // Convert string to number
      // Convert dates to ISO string format
      experienceDto.dateDebut = new Date(experienceDto.dateDebut).toISOString();
      if (experienceDto.dateFin) {
        experienceDto.dateFin = new Date(experienceDto.dateFin).toISOString();
      }

      this.experienceService.addExperience(experienceDto).subscribe({
        next: (response) => {
          console.log('Experience added successfully', response);
          this.showSuccessMessage("Experience added successfully! Redirecting...");
          this.startRedirectTimer();
        },
        error: (error) => {
          console.error('Error adding experience', error);
          this.showErrorMessage("Failed to add experience. Please try again later.");
        }
      });
    }
  }



  showErrorMessage(message: string): void {
    this.successMessage = message;  // Reusing the same message variable
    this.showSuccess = true;       // Reusing the same show flag
    // Change alert type to danger by adding a class
    this.isErrorState = true;

    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.showSuccess = false;
      this.isErrorState = false;
    }, 5000);
  }



// Add these new methods
  showSuccessMessage(message: string): void {
    this.successMessage = message;
    this.showSuccess = true;
  }

  startRedirectTimer(): void {
    this.redirectTimer = setTimeout(() => {
      this.router.navigateByUrl("/nav/experience-list"); // Change this to your desired redirect path
      this.showSuccess = false;
    }, 3000); // 3 seconds delay before redirect
  }

  dismissSuccess(): void {
    this.showSuccess = false;
    clearTimeout(this.redirectTimer);
    this.router.navigateByUrl("/nav/experience-list"); // Optional: redirect immediately when dismissed
  }

// Don't forget to clear the timer when component is destroyed
  ngOnDestroy(): void {
    if (this.redirectTimer) {
      clearTimeout(this.redirectTimer);
    }
  }
}

