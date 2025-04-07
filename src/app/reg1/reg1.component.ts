import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, Ville} from '../models/user.model';

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

  constructor(private fb: FormBuilder) {
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
      motDePasse: ['', [Validators.required, Validators.minLength(6)]], confirmPassword: ['', Validators.required],
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
      console.log('Formulaire soumis:', this.inscriptionForm.value);
      // Ici vous enverriez les données à votre API
      alert('Inscription réussie!');
    }



  }
}
