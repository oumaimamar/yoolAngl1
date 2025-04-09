import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, Ville} from '../models/user.model';
import {formatDate} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-regiter',
  standalone: false,
  templateUrl: './regiter.component.html',
  styleUrl: './regiter.component.css'
})
export class RegiterComponent implements OnInit {
  registrationForm! : FormGroup;

  currentDate = new Date(); // For displaying in template
  ville : string[]=[];
  submittedUser: User | null = null;

  public users : any;



  constructor(private fb: FormBuilder,
              private activatedRoute : ActivatedRoute,
              private http: HttpClient,) {
    this.createForm();
  }

ngOnInit() {
  for (let elt in Ville){
    let value = Ville[elt];
    if (typeof value === 'string'){
      this.ville.push(value);
    }
  }

  this.http.get("http://localhost:8021/users")
    .subscribe({
      next : data =>{
        this.users=data;
      },
      error:err => {
        console.log(err);
      }
    })


}


  createForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      ville: ['', Validators.required],

      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('motDePasse')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const now = new Date();

      this.submittedUser = {
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        phone: this.registrationForm.value.phone,
        ville: this.registrationForm.value.ville,
        motDePasse: this.registrationForm.value.motDePasse,
        dateInscription: formatDate(now, 'yyyy-MM-dd', 'en-US') // Or other format
        // role will be managed by the backend
      };

      console.log('User to be submitted:', this.submittedUser);
      // Ici, vous enverriez normalement les données à votre API
      alert('Inscription réussie!');
      this.registrationForm.reset();
    } else {
      alert('Veuillez remplir correctement tous les champs obligatoires.');
    }
  }

  saveNewUser() {
    let formData : FormData = new FormData();
    formData.set('data',this.registrationForm.value.data);
  }
}
