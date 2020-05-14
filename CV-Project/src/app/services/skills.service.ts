import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SkillsService {
    constructor(){}
    private skills : ISkills[] = [
        {skillName : "C#", starCount : 4},
        {skillName : "COBOL", starCount : 5},
        {skillName : "Windows Forms", starCount : 4},
        {skillName : "HTML", starCount : 4},
        {skillName : "CSS", starCount : 3},
        {skillName : "Javascript", starCount : 3},
        {skillName : "Node.js", starCount : 3},
        {skillName : "Angular", starCount : 4},
        {skillName : "ASP.NET Core", starCount : 4},
        {skillName : "ASP.NET Web Api", starCount : 4},
        {skillName : "SQL", starCount : 4},
        {skillName : "MS SQL Server", starCount : 4},
        {skillName : "Entity Framework", starCount : 2},
        {skillName : "Git", starCount : 5},
        {skillName : "Github", starCount : 4},
        {skillName : "TeamFS", starCount : 4},
        {skillName : "Source Tree", starCount : 4},
        {skillName : "Visual Studio", starCount : 4},
        {skillName : "MS Office", starCount : 4}
        ];

    getSkills(){
        return this.skills;
    }
}