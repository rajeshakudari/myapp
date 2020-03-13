import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {



  constructor(private http: HttpClient,) { }

  postdata(data){
    return this.http.post('http://localhost:3000/datatwo/', data)
  }

  getdata(){
   return this.http.get('http://localhost:3000/datatwo')
  }
}
