import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  signupobj: any;
  loginForm: any;
  constructor(private Router: Router) {}
  loginobj: any = {
    username: '',
    password: '',
  };
  loginError: string = '';
  // router: any;

  onlogin() {
    debugger;
    const storedUser = localStorage.getItem(this.loginobj.username);
    if (!storedUser) {
      this.loginError = 'User not found.';

      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== this.loginobj.password) {
      this.loginError = 'Incorrect password.';
      return;
    }

    alert('Login successful!');
    this.Router.navigateByUrl('/home');
  }

  //   loginForm: FormGroup;
  //   loginError!: string | string; // or string | undefined;
  //   password: any;
  //   email: any;

  //   constructor(private fb: FormBuilder, private router: Router) {
  //     this.loginForm = this.fb.group({
  //       email: ['', Validators.required],
  //       password: ['', Validators.required],
  //     });
  //   }

  // w  onSubmit() {
  //     var check = this.loginForm.controls;
  //     const storedUser = localStorage.getItem(this.loginForm.value.email);
  //     if (!storedUser) {
  //       this.loginError = 'User not found.';
  //       return;
  //     }

  //     const user = JSON.parse(storedUser);
  //     if (user.password !== this.loginForm.value.password) {
  //       {
  //         this.loginError = 'Incorrect password.';
  //         return;
  //       }
  //     }
  //   }
}
