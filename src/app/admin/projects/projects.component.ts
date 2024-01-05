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

  newProject:Projects= new Projects();
  editProject:Projects= new Projects();
  editIndex:any=null;
  deleteProject:Projects = new Projects();
  deleteIndex:any=null;
  searchBy:string="ProjectName";
  searchText:string='';

  constructor(private projectService:ProjectsService){

  }
  ngOnInit(){
    this.projectService.getAllProjects().subscribe(
      (response:Projects[])=>{
        this.projects= response;
        
      }
    );
  }


  onSaveClick(){
    this.projectService.insertProject(this.newProject).subscribe({
      next:(response:any)=>{
      
        //Add Project to grid
        const p:Projects = new Projects();
        p.projectID = response.projectID;
        p.projectName= response.projectName
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p)
  
        this.newProject.projectID=null;
        this.newProject.projectName=null;
        this.newProject.dateOfStart=null;
        this.newProject.teamSize=null;
  
      }, 
      error:()=>{
     
      }
  })
  }


  onEditClick(event:any, index:number){
    this.editProject.projectID=this.projects[index].projectID;
    this.editProject.projectName=this.projects[index].projectName;
    this.editProject.dateOfStart=this.projects[index].dateOfStart;
    this.editProject.teamSize=this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe((response:Projects)=>{
      const p:Projects = new Projects();
      p.projectID= response.projectID;
      p.projectName= response.projectName;
      p.dateOfStart= response.dateOfStart;
      p.teamSize=response.teamSize;
      this.projects[this.editIndex]= p;

      this.newProject.projectID=null;
      this.newProject.projectName=null;
      this.newProject.dateOfStart=null;
      this.newProject.teamSize=null;
    }),
    ()=>{

    }
  }
  onDeleteClick(event:any, index:number){
      this.deleteIndex = index;
      this.deleteProject.projectID=this.projects[index].projectID;
    this.deleteProject.projectName=this.projects[index].projectName;
    this.deleteProject.dateOfStart=this.projects[index].dateOfStart;
    this.deleteProject.teamSize=this.projects[index].teamSize;
  }

  onDeleteConfirmClick(){
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response:any)=>{
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID=null;
        this.deleteProject.projectName=null;
        this.deleteProject.dateOfStart=null;
        this.deleteProject.teamSize=null;
      })
  }

  onSearchClick(){
    this.projectService.SearchProjects(this.searchBy, this.searchText).subscribe(
      (response:Projects[]) => {
        this.projects= response;
      },
      () => { }
    )
  }
  
}
