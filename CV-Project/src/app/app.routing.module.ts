import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'experience', component : ExperienceComponent},
    {path : 'education', component : EducationComponent},
    {path : 'skills', component : SkillsComponent},
    {path : 'info', component : InfoComponent},
    {path : 'contact', component : ContactComponent},
    {path : '**', component : NotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }