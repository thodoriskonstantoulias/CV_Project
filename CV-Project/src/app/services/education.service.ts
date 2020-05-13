import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class EducationService {
    constructor(){}
    private educ : IEducation[] = [
    {
        title : "Master Degree, Electrical & Computer Engineering",
        uniName : "University of Patras"
    },
    {
        title : "Certificate of Proficiency in English",
        uniName : "University of Michigan"
    }
    ];

    getEducation() : IEducation[] {
        return this.educ;
    }
}