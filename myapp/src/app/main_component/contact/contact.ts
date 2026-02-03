import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../../../servicess/contacts-service';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, CommonModule,],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
    feedback: new FormControl('', [Validators.required, Validators.minLength(3)]),

  })

  constructor(private contactService: ContactsService, private toastr: ToastrService) { }


  onSubmit() {
    // const fromValue= this.contactForm.value
    console.log(this.contactForm.value);

    if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    this.toastr.error('All fields are required', 'Error');
    return;
  }
      this.contactService.contactFeedback(this.contactForm.value).subscribe({
      next: res => {
        this.toastr.success('Feedback suceesful','Success')
        this.contactForm.reset();
      },
      error: err => {
        this.toastr.error('Feedback failed','Error')

      }

    });

     
  }
  get fname(){
    return this.contactForm.get('fname');
  }
  get lname(){
    return this.contactForm.get('lname');
  }
   get email(){
    return this.contactForm.get('email');
  }
   get phone(){
    return this.contactForm.get('phone');
  } 
  get feedback(){
    return this.contactForm.get('feedback');
  } 


}

