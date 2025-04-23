import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CertificationService} from '../services/certification.service';
import {Router} from '@angular/router';
import {SkillService} from '../services/skill.service';
import {CertificationDTO} from '../models/certification.model';
import {SkillDTO} from '../models/skill.model';

@Component({
  selector: 'app-skill-form',
  standalone: false,
  templateUrl: './skill-form.component.html',
  styleUrl: './skill-form.component.css'
})
export class SkillFormComponent implements OnInit, OnDestroy {
  skillForm: FormGroup;

  // Add these properties
  showSuccess = false;
  successMessage = '';
  redirectTimer: any;

  isErrorState = false;


  constructor(
    private fb: FormBuilder,
    private skillService: SkillService,
    private router: Router
  ) {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      // userId: [2] // Assuming this is set based on logged-in user
      userId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    if (this.skillForm.valid) {
      const skillDTO: SkillDTO = this.skillForm.value;

      userId: Number(skillDTO.userId), // Convert string to number
        // Convert dates to ISO string format

      this.skillService.addSkill(skillDTO).subscribe({
        next: (response) => {
          console.log('skill added successfully', response);
          this.showSuccessMessage("skill added successfully! Redirecting...");
          this.startRedirectTimer();
        },
        error: (error) => {
          console.error('Error adding skill', error);
          this.showErrorMessage("Failed to add skill. Please try again later.");
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
      this.router.navigateByUrl("/nav/skill-list"); // Change this to your desired redirect path
      this.showSuccess = false;
    }, 3000); // 3 seconds delay before redirect
  }

  dismissSuccess(): void {
    this.showSuccess = false;
    clearTimeout(this.redirectTimer);
    this.router.navigateByUrl("/nav/skill-list"); // Optional: redirect immediately when dismissed
  }

// Don't forget to clear the timer when component is destroyed
  ngOnDestroy(): void {
    if (this.redirectTimer) {
      clearTimeout(this.redirectTimer);
    }
  }
}
