import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private snack:MatSnackBar){

  }

  btnClick(){
    this.snack.open("Welcome to Email Sender App");
  }




}
