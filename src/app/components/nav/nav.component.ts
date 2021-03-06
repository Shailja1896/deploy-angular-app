import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userName: string;

  constructor( private router: Router) {
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
