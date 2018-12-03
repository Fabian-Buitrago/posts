import { ApiService } from '../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: Post[] = [];
  postDetail: Post;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData<Post>(this.postsUrl).subscribe((data: Post[]) => {
      if(data.length){
        this.posts = data;
        this.postDetail = data[0];
      }
    });
  }

  onShowPost(post: Post){
    this.postDetail = post;
  }

}
