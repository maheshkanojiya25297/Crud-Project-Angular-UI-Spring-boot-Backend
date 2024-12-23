import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 
  constructor(private snack: MatSnackBar){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  btnClick(){
    console.log("btn clicked");
    this.snack.open("Hello Welcome to This App ):");
  }

}
