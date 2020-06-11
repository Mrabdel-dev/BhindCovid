import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  public save(){
    return this.http;
  }
  public findAll(){
    return this.http;
  }
}
