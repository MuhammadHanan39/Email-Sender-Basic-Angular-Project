import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http:HttpClient) { }

  sendEmail(data:any){
    return this.http.post("http:localhost:8087/contact",data);
  }



}
