import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public companies : ICompanies[] =  [];
  constructor(private experienceService : ExperienceService) { }

  ngOnInit() {
    this.companies = this.experienceService.getExperience();
  }

}
