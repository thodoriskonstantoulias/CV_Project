import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
   
export class ExperienceService {
    constructor(){};
    private companies : ICompanies[] = [
    {
        name : "Agile Actors",
        title : "Software Engineer",
        current : true,
        from : new Date(2018,5),
        to : new Date(),
        text : `- Financial services industry (Previous Client : Alpha Bank, Current Client : Eurobank)
        - Be part of the biggest refactoring banking project in Greece (Alpha Bank)
        - Back-End programming (Alpha Bank)
        - Full Stack Programming (Eurobank)
        - UAT support
        - Production Support (Eurobank)
        - Promotions to Integration and UAT (Eurobank)
        - Technologies used in Alpha Bank: COBOL, OS2200 Mainframe, SQL, Eclipse, Git, Source Tree, MS Team Foundation Server, MS Office
        - Technologies used in Eurobank: C#, MS SQL Server, Jira, Angular JS, TFS, MS Office`
    },
    {
        name : "Accenture",
        title : "Associate Software Engineer",
        current : false,
        from : new Date(2017,5),
        to : new Date(2018,5),
        text : `-Financial services industry (Client : Eurobank)
        -Be part of all stages of project including development, integration, UAT and production
        -Functional specification
        -Technical design
        -Test scenarios
        -Project estimation
        -Core banking knowledge
        -Communicating with client
        -Technologies used: COBOL, DB2, SQL, JCL, CICS, IBM Mainframe`
    }];

    getExperience() :ICompanies[] {
        return this.companies;
    }
}