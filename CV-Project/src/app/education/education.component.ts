import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public education : IEducation[] = [];
  constructor(private educationService : EducationService) { }

  ngOnInit() {
    this.education = this.educationService.getEducation();
  }

}
