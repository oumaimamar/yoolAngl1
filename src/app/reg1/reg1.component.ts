import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, Ville} from '../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {formatDate} from '@angular/common';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-reg1',
  standalone: false,
  templateUrl: './reg1.component.html',
  styleUrl: './reg1.component.css'
})
export class Reg1Component implements OnInit  {
  inscriptionForm! : FormGroup;
  submittedUser: User | null = null;
  ville : string[]=[];

  currentDate = new Date(); // For displaying in template
  public users : any;

  constructor(private fb: FormBuilder,
              private activatedRoute : ActivatedRoute,
              private userService: UserService,) {
    this.createForm();
  }

  ngOnInit() {

    for (let elt in Ville){
      let value = Ville[elt];
      if (typeof value === 'string'){
        this.ville.push(value);
      }
    }

  }

  createForm() {
    this.inscriptionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],

      phone: [''],
      ville: ['', Validators.required],
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('motDePasse')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const now = new Date();

      const submittedUser = {
        firstName: this.inscriptionForm.value.firstName,
        lastName: this.inscriptionForm.value.lastName,
        email: this.inscriptionForm.value.email,
        phone: this.inscriptionForm.value.phone,
        ville: this.inscriptionForm.value.ville,
        motDePasse: this.inscriptionForm.value.motDePasse,
        dateInscription: formatDate(now, 'yyyy-MM-dd', 'en-US') // Or other format
        // role will be managed by the backend
      };

      console.log('User to be submitted:', this.submittedUser);
      // Ici, vous enverriez normalement les données à votre API
      this.userService.newUser(submittedUser).subscribe({
        next: (response) => {
          alert('Inscription réussie!');
          this.inscriptionForm.reset();
          // Optional: redirect to login or profile page
          // this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
          alert('Erreur lors de l\'inscription. Veuillez réessayer.');
        }
      });
    } else {
      alert('Veuillez remplir correctement tous les champs obligatoires.');
    }
  }

  saveNewUser() {
    let formData : FormData = new FormData();
    formData.set('data',this.inscriptionForm.value.data);
  }
}
