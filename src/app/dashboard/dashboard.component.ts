import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation?:string;
  Username?:string;
  NoOfTeamMembers?:number;
  TotalCostOfAllProjects?:number;
  PendingTask?:number;
  UpComingProjects?:number;
  ProjectCost?:number;
  CurrentExpenditure?:number;
  AvailableFunds?:number;
  ngOnInit() {
    
    this.Designation="Team Leader";
    this.Username="P Avinash";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTask=15;
    this.UpComingProjects=2;
    this.ProjectCost=2113507;
    this.CurrentExpenditure=96788;
    this.AvailableFunds=52536;

  }
}
