import { Component, OnInit } from '@angular/core';
import {CovidService} from '../service/covid.service';
import {BlogService} from '../service/blog.service';
import {Blog} from '../models/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blogService: BlogService) { }
// tslint:disable-next-line:variable-name
  private _blogList: Array<Blog>;
  ngOnInit(): void {
    this.findLastBlog()
  }
  public findLastBlog(){
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
