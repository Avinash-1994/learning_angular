import { Component, OnInit } from '@angular/core';
import { ClientLocation } from 'src/app/client-location';
import { ClientLocationService } from 'src/app/client-location.service';
import { Projects } from 'src/app/projects';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projects:Projects[]=[];
  clientLocations:ClientLocation[] = [];
  showLoading:boolean = true;

  newProject:Projects= new Projects();
  editProject:Projects= new Projects();
  editIndex:any=null;
  deleteProject:Projects = new Projects();
  deleteIndex:any=null;
  searchBy:string="ProjectName";
  searchText:string='';

  constructor(private projectService:ProjectsService, private clientLocationService : ClientLocationService){

  }
  ngOnInit(){
    this.projectService.getAllProjects().subscribe({
      next: (response:Projects[])=>{
        this.projects= response;
      }
    });
    this.clientLocationService.getClientLocation().subscribe({
      next: (responsse)=>{
        this.clientLocations = responsse;
      }
    })
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
        p.clientLocation = response.clientLocation;
        p.active= response.active;
        p.clientLocationID = response.clientLocationID;
        p.status = response.status
        this.projects.push(p)
  
        this.newProject.projectID=null;
        this.newProject.projectName=null;
        this.newProject.dateOfStart=null;
        this.newProject.teamSize=null;

        this.newProject.active= false;
        this.newProject.clientLocationID= null;
        this.newProject.status= null
  
      }, 
      error:()=>{
     
      }
  })
  }


  onEditClick(event:any, index:number){
    this.editProject.projectID=this.projects[index].projectID;
    this.editProject.projectName=this.projects[index].projectName;
    this.editProject.dateOfStart=this.projects[index].dateOfStart.split('/').reverse().join('-');
    this.editProject.teamSize=this.projects[index].teamSize;
    this.editProject.active = this.projects[index].active;
    this.editProject.clientLocationID= this.projects[index].clientLocationID;
    this.editProject.clientLocation= this.projects[index].clientLocation;
    this.editProject.status= this.projects[index].status;
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
