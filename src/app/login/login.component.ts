import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    });
  }


  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let auth: boolean = this.authService.login(username, password);

    // if (auth == true) {
    //   this.router.navigateByUrl("/nav")
    // }

    if (auth) {
      const role = this.authService.getHighestRole();

      if (role === 'RESP') {
        this.router.navigateByUrl("/nav/home-resp");
      } else if (role === 'APP') {
        this.router.navigateByUrl("/nav/home");
      } else {
        this.router.navigateByUrl("/login"); // fallback
      }
    } else {
      alert("Invalid credentials!");
    }
  }

  newUser() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let auth: boolean = this.authService.login(username, password);
    if (auth == false) {
      this.router.navigateByUrl("/register")
    }

  }
}
