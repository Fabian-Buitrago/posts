import { CommentComponent } from './detail/comment/comment.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostsComponent,
    ListComponent,
    DetailComponent,
    CommentComponent
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
