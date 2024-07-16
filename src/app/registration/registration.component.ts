import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  constructor(private http: HttpClientModule) {}
  signupUsers: any[] = [];
  signupobj: any = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onSignUp() {
    if (
      !this.signupobj.userName ||
      !this.signupobj.email ||
      !this.signupobj.password ||
      !this.signupobj.confirmPassword
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if (this.signupobj.password !== this.signupobj.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    const user = {
      userName: this.signupobj.userName,
      email: this.signupobj.email,
      password: this.signupobj.password,
    };

    localStorage.setItem(this.signupobj.userName, JSON.stringify(user));
    alert('Signup successful!');
  }

  // storedData: any = null;

  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     const formData = form.value;
  //     localStorage.setItem(username, JSON.stringify(formData));
  //     alert('Registration successful! Data has been saved to local storage.');
  //     form.reset();
  //   }
  // }

  // getStoredData() {
  //   const data = localStorage.getItem(this.getStoredData.username);
  //   if (data) {
  //     this.storedData = JSON.parse(data);
  //   } else {
  //     alert('No data found in local storage.');
  //     this.storedData = null;
  //   }
  // }
}
