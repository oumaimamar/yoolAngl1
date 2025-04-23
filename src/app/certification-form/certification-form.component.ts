import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CertificationService} from '../services/certification.service';
import {CertificationDTO} from '../models/certification.model';

@Component({
  selector: 'app-certification-form',
  standalone: false,
  templateUrl: './certification-form.component.html',
  styleUrl: './certification-form.component.css'
})
export class CertificationFormComponent implements OnInit, OnDestroy {
  certificationForm: FormGroup;

  // Add these properties
  showSuccess = false;
  successMessage = '';
  redirectTimer: any;

  isErrorState = false;


  constructor(
    private fb: FormBuilder,
    private certificationService: CertificationService,
    private router: Router
  ) {
    this.certificationForm = this.fb.group({
      titre: ['', Validators.required],
      organisation: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [''],
      description: ['', Validators.required],
      // userId: [2] // Assuming this is set based on logged-in user
      userId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.certificationForm.valid) {
      const certificationDTO: CertificationDTO = this.certificationForm.value;

      userId: Number(certificationDTO.userId), // Convert string to number
        // Convert dates to ISO string format
        certificationDTO.dateDebut = new Date(certificationDTO.dateDebut).toISOString();
      if (certificationDTO.dateFin) {
        certificationDTO.dateFin = new Date(certificationDTO.dateFin).toISOString();
      }

      this.certificationService.addCertification(certificationDTO).subscribe({
        next: (response) => {
          console.log('certification added successfully', response);
          this.showSuccessMessage("Certification added successfully! Redirecting...");
          this.startRedirectTimer();
        },
        error: (error) => {
          console.error('Error adding certification', error);
          this.showErrorMessage("Failed to add certification. Please try again later.");
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
      this.router.navigateByUrl("/nav/certification-list"); // Change this to your desired redirect path
      this.showSuccess = false;
    }, 3000); // 3 seconds delay before redirect
  }

  dismissSuccess(): void {
    this.showSuccess = false;
    clearTimeout(this.redirectTimer);
    this.router.navigateByUrl("/nav/certification-list"); // Optional: redirect immediately when dismissed
  }

// Don't forget to clear the timer when component is destroyed
  ngOnDestroy(): void {
    if (this.redirectTimer) {
      clearTimeout(this.redirectTimer);
    }
  }
}
