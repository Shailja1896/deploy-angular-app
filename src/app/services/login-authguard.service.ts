import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    console.log('canActivate');
    const username = localStorage.getItem('username');
    if (username) {
        console.log('username found');
        this.router.navigate(['/home']);
        return false;
    } else {
        console.log('username not found ');
        return true;
    }
}
}
