import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostModel, UserModel } from 'src/app/screens/home/home/home.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  navigationSubscription: Subscription;
  postList: PostModel[];
  id: number;

  constructor(private route: ActivatedRoute, private network: NetworkService) { }

  ngOnInit(): void {
    this.navigationSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fetchPosts()
    });
  }

  fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const parms = this.id;

    this.network.getHttpRequest(url, parms).subscribe(
      (res: PostModel[]) => {
        console.log('response posts', res);
        this.postList = res;
      }, (err) => {
        console.log('error', err);
      })
  }


  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

}
