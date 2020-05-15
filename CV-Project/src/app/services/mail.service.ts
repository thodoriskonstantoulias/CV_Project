import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
   
export class MailService {
    constructor(private http: HttpClient){}

    postMail(mailUrl:string,email:string,message:string){
        return this.http.post(mailUrl,{
            "_replyto" : email,
            "message" : message 
        });
    }
}