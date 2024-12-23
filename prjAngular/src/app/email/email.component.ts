import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  standalone: false,
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'] // Replace 'styleUrl' with 'styleUrls'
})
export class EmailComponent implements OnInit {

  data = {
    to: "",
    subject: "",
    message: ""
  };

  constructor(private email: EmailService, private snackBar: MatSnackBar) { } // Use snackBar instead of snak

  ngOnInit(): void { }

  doSubmitForm() {
    console.log("Trying to submit form"); // Use descriptive messages
    console.log("DATA", this.data);

    if (this.data.to=='' || this.data.subject=='' || this.data.message=='') {
      this.snackBar.open("fields cannot be Empty!!", "OK"); // Improved message
      return;
    }

    this.email.sendEmail(this.data).subscribe({
      next: (response) => {
        console.log("Email sent successfully", response); // Improved message
        this.snackBar.open("Email sent!", "OK"); // Confirmation message
      },
      error: (error) => {
        console.error("Error sending email", error);
        this.snackBar.open("An error occurred. Please try again later.", "OK"); // Error notification
      }
    });
  }
}