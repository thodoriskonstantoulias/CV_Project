import { Component, OnInit, ViewChild  } from '@angular/core';
import { MailService } from '../services/mail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('form',{static:true})
  form: NgForm;

  name: string;
  email: string;
  message: string;
  successFlag : boolean =  false;
  errorFlag : boolean = false;
  private mailUrl = "https://formspree.io/xgenowed";
  constructor(private mailService : MailService) { }

  ngOnInit() {
  }

  processForm(){
      this.mailService.postMail(this.mailUrl,this.email,this.message)
          .subscribe(
            data =>  {
              this.successFlag = true;
              this.clearForm();
              this.clearFlagsAfterTime();
            },
            error => {
              this.errorFlag = true;
              this.clearFlagsAfterTime();
            }
          );
  }

  clearFlagsAfterTime(){
    setTimeout(() => {
      this.errorFlag = false;
      this.successFlag = false;
    }, 5000);
  }

  clearForm(){
    this.name = "";
    this.email = "";
    this.message = "";
    this.form.form.markAsPristine();
    this.form.form.markAsUntouched();
    this.form.form.updateValueAndValidity();
  }

}
