import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class EducationService {
    constructor(){}
    private educ : IEducation[] = [
    {
        title : "Master Degree, Electrical & Computer Engineering",
        uniName : "University of Patras",
        imageUrl : "https://media-exp1.licdn.com/dms/image/C4E0BAQFHBWtVEEnQyg/company-logo_100_100/0?e=1597276800&v=beta&t=MWcdemviKPlajPXEkhcj-t8x2jh0Jq-wNJqIPPI0iEY"
    },
    {
        title : "Certificate of Proficiency in English",
        uniName : "University of Michigan",
        imageUrl : "https://media-exp1.licdn.com/dms/image/C4E0BAQFGfERBPGurCg/company-logo_100_100/0?e=1597276800&v=beta&t=IB8Xck846Vul1t7RqWWzuYFrpJsTDBONvTH5VvW1W4Q"
    }
    ];

    getEducation() : IEducation[] {
        return this.educ;
    }
}