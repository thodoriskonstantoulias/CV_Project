import { Component, OnInit  } from '@angular/core';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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

}
