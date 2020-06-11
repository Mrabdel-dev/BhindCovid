import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../service/blog.service';
import {Blog} from '../../models/blog.model';
@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
private _blogclass: Blog ;
  constructor(private postservice: BlogService) { }

  ngOnInit(): void {
  }

  public save(blog: Blog){
    this.blogclass = blog;
    console.log(blog.date.getDate());
    return this.postservice.save().post<Blog>('http://localhost:8090/api/Blog/save/', this.blogclass).subscribe(
      data => {
        if (data != null){
        console.log('save');
        console.log(data);
        this._blogclass = null;
        alert('post has been added to the blog');
        }
        else {
          alert(' erroooor, Try again');
        }
      }
    );
  }

  get blogclass(): Blog {
    if (this._blogclass == null){
      this._blogclass = new Blog();
    }
    return this._blogclass;
  }

  set blogclass(value: Blog) {
    this._blogclass = value;
  }


}
