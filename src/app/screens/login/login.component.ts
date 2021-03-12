import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import CryptoJS from 'crypto-js';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  incorrectData: string;
  isUserLoggedIn: boolean;
  showErrorMsg: boolean;
  submitClick: boolean;
  isActive = true;
  constructor(
    private networkService: NetworkService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]))
    });
  }

  login() {
    this.signInForm;
    this.submitClick = true;
    if (this.signInForm.valid) {
      localStorage.setItem('username', this.signInForm.value.username);
      localStorage.setItem('password', CryptoJS.SHA1(this.signInForm.value.password));
      this.router.navigate(['/home'])
    }
  }

  hideSpinner() {
    setTimeout(() => {
      this.spinner.hide();
      console.log('hide');
    }, 200);
  }

  showSpinner() {
    this.spinner.show();
    console.log('show');
  }

}
