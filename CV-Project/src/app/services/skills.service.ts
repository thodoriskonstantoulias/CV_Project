import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SkillsService {
    constructor(){}
    private skills : ISkills[] = [
        {skillName : "C#", starCount : 8},
        {skillName : "COBOL", starCount : 10},
        {skillName : "Windows Forms", starCount : 7},
        {skillName : "HTML", starCount : 9},
        {skillName : "CSS", starCount : 7},
        {skillName : "Javascript", starCount : 7},
        {skillName : "Node.js", starCount : 7},
        {skillName : "Angular", starCount : 8},
        {skillName : "ASP.NET Core", starCount : 8},
        {skillName : "ASP.NET Web Api", starCount : 8},
        {skillName : "SQL", starCount : 8},
        {skillName : "MS SQL Server", starCount : 9},
        {skillName : "Entity Framework", starCount : 6},
        {skillName : "Git", starCount : 9},
        {skillName : "Github", starCount : 8},
        {skillName : "TeamFS", starCount : 8},
        {skillName : "Source Tree", starCount : 9},
        {skillName : "Visual Studio", starCount : 9},
        {skillName : "MS Office", starCount : 10}
        ];

    getSkills(){
        return this.skills;
    }
}