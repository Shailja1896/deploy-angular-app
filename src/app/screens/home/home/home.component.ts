import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';
import { UserModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: UserModel[] = [];
  filteredList: UserModel[] = [];
  serachText: string;

  constructor(private router: Router, private network: NetworkService) { }

  ngOnInit(): void {
    this.fetchUserList();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  fetchUserList() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.network.getHttpRequest(url).subscribe(
      (res: UserModel[]) => {
        this.userList = res;
        this.filteredList = res;
        console.log('response', res);
      }, (err) => {
        console.log('error', err);
      })
  }

  searchUser(text: string) {
    const newArray = this.userList.filter((data: UserModel) => { return data.name.includes(text) });
    this.filteredList = [...newArray];
  }

  openPost(id: number) {
    this.router.navigate(['/home/posts', id])
  }
}
