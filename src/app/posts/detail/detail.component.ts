import { ApiService } from '../../shared/services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/interfaces/post.interface';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.css' ],
})
export class DetailComponent {
	commentsUrl = 'https://jsonplaceholder.typicode.com/posts';
	postDetail: Post;
	comments: Comment[] = [];

	@Input('post')
	set post(post: Post) {
	    if(post){
	      this.postDetail = post;
	      this.getComments();
	    }
	}

	constructor(private api: ApiService) {}

	getComments() {
	    this.api.getData<Comment>(`${this.commentsUrl}/${this.postDetail.userId}/comments`)
	    .subscribe((data: Comment[]) => {
			if (data.length) {
				this.comments = data;
			}
		});
	}

	get random(){
		return Math.floor(Math.random() * 100) + 1;
	}

	get randomImage(){
		return `https://picsum.photos/1000/300/?image=${this.random}`;
	}
}
