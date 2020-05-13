import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SkillsService {
    constructor(){}
    private skills : ISkills[] = [
        {skillName : "C#", starCount : 4},
        {skillName : "COBOL", starCount : 5}];

    getSkills(){
        return this.skills;
    }
}