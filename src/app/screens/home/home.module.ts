import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/components/user/user.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from 'src/app/components/posts/posts.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:id', component: PostsComponent }
];


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ],
  exports: [
    UserComponent
  ]
})
export class HomeModule { }
