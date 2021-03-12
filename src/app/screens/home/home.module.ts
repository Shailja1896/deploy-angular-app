import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { SharedAppModule } from 'src/app/shared/shared.module';

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
    FormsModule,
    SharedAppModule
  ],
  exports: [
    UserComponent
  ]
})
export class HomeModule { }