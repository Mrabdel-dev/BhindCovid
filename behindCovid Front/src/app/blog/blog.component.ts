import { Component, OnInit } from '@angular/core';
import {Blog} from '../models/blog.model';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }
// tslint:disable-next-line:variable-name
private _blogList: Array<Blog>;
  ngOnInit(): void {
    this.findAllBlog();
  }
public findAllBlog(){
    return this.blogService.findAll().get<Array<Blog>>('http://localhost:8090/api/Blog/').subscribe(
      data => {
          this.blogList = data ;
          console.log('done');
      }
    );
}
  get blogList(): Array<Blog> {
    if (this._blogList == null) {
      this._blogList = new Array<Blog>();
    }
    return this._blogList;
  }

  set blogList(value: Array<Blog>) {
    this._blogList = value;
  }
}
