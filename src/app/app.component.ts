import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  showNavbarListPage = ['/', '/home','/posts'];
  showNavBar: boolean;

  constructor(private router: Router) {

  }

  ngOnInit() {
    // this.router.events.subscribe((e) => {
    //   if (e instanceof NavigationEnd) {
    //     const url = e.url.substring(0, e.url.indexOf('?'));
    //     e.url = url ? url : e.url;
    //     console.log('in app componet')
    //     if (this.showNavbarListPage.indexOf(e.url) !== -1) {
    //       this.showNavBar = true;
    //       // this.broadcaster.broadcast('referralUpdateCount');
    //     } else {
    //       console.log('hide navbar');
    //       this.showNavBar = false;
    //     }
    //   }
    // });
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showNavBar = false;
        } else {
          // console.log("NU")
          this.showNavBar = true;
        }
      }
    });
  }

}
