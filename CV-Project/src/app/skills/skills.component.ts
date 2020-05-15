import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills : ISkills[] = [];
  public numbers = [1,2,3,4,5,6,7,8,9,10];
  constructor(private skillsService : SkillsService) {
    
   }

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

}
