import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormationService} from '../services/formation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormationDTO} from '../models/formation.model';

@Component({
  selector: 'app-formation-form',
  standalone: false,
  templateUrl: './formation-form.component.html',
  styleUrl: './formation-form.component.css'
})
export class FormationFormComponent implements OnInit, OnDestroy {
  formationForm: FormGroup;

  // Add these properties
  showSuccess = false;
  successMessage = '';
  redirectTimer: any;

  isErrorState = false;


  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private router: Router
  ) {
    this.formationForm = this.fb.group({
      ecole: ['', Validators.required],
      diplome: ['', Validators.required],
      domainEtude: ['', Validators.required],
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
    if (this.formationForm.valid) {
      const formationDTO: FormationDTO = this.formationForm.value;

      userId: Number(formationDTO.userId), // Convert string to number
        // Convert dates to ISO string format
        formationDTO.dateDebut = new Date(formationDTO.dateDebut).toISOString();
      if (formationDTO.dateFin) {
        formationDTO.dateFin = new Date(formationDTO.dateFin).toISOString();
      }

      this.formationService.addFormation(formationDTO).subscribe({
        next: (response) => {
          console.log('Formation added successfully', response);
          this.showSuccessMessage("Formation added successfully! Redirecting...");
          this.startRedirectTimer();
        },
        error: (error) => {
          console.error('Error adding formation', error);
          this.showErrorMessage("Failed to add formation. Please try again later.");
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
      this.router.navigateByUrl("/nav/formation-list"); // Change this to your desired redirect path
      this.showSuccess = false;
    }, 3000); // 3 seconds delay before redirect
  }

  dismissSuccess(): void {
    this.showSuccess = false;
    clearTimeout(this.redirectTimer);
    this.router.navigateByUrl("/nav/formation-list"); // Optional: redirect immediately when dismissed
  }

// Don't forget to clear the timer when component is destroyed
  ngOnDestroy(): void {
    if (this.redirectTimer) {
      clearTimeout(this.redirectTimer);
    }
  }
}
