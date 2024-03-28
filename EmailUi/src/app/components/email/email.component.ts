import { Component } from '@angular/core';
import { EmailServiceService } from '../../service/email-service.service';
import { error } from 'console';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {


  data={ 
    name:"",
    to:"",
    subject:"",
    message:""
  }
  constructor(private email:EmailServiceService){

  }


  submitData(){
    console.log(this.data);
    this.email.sendEmail(this.data).subscribe(
      response =>{
        console.log(response);
      }
    )

  }





}
