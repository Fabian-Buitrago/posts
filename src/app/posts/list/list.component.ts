import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { Post } from '../../shared/interfaces/post.interface';
import { post } from 'selenium-webdriver/http';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css' ],
})
export class ListComponent implements OnInit {
	@Input() post;
	@Output() postDetail: EventEmitter<Post> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	showPost() {
		this.postDetail.next(this.post);
	}
}
