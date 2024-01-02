import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/projects';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projects:Projects[]=[];


  constructor(private projectservice:ProjectsService){

  }
  ngOnInit(){
    this.projectservice.getAllProjects().subscribe(
      (response:Projects[])=>{
        this.projects= response;
      }
    );
  }
}
