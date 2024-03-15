import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Inject } from '@angular/core';

import {TranslateService, TranslateModule} from "@ngx-translate/core";




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    agreedToPrivacyPolicy: false
  }

  dialogOpen = false;

  mailTest = false;

  post = {
    endPoint: 'https://henrik-sorg.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private translate: TranslateService){

  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.dialogOpen = true;
            setTimeout(() => {
              this.dialogOpen = false;
            }, 3000);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      
    } 
  }
}
