import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTask: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit() {

    this.Designation = "Team Leader";
    this.Username = "P Avinash";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTask = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Clients = [
      'ABC infotech', 'Rahul Technologies', 'Karan Infotech'
    ];
    this.Projects = [
      'Project A', 'Project B', 'Project AB', 'Project CA'
    ];
    for (let i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    };
    this.TeamMembersSummary = [
      {
        region: 'East',
        teamMembersCount: 20,
        temporarilyUnavaailablemembers: 4
      },
      {
        region: 'South',
        teamMembersCount: 15,
        temporarilyUnavaailablemembers: 8
      },
      {
        region: 'West',
        teamMembersCount: 17,
        temporarilyUnavaailablemembers: 3
      },
      {
        region: 'North',
        teamMembersCount: 18,
        temporarilyUnavaailablemembers: 4
      }
    ];


    this.TeamMembers = [
      {
        Region: "East",
        Members: [
          {
            ID: 1,
            Name: 'Shubham',
            Status: 'Available'
          },
          {
            ID: 2,
            Name: 'Adil',
            Status: 'Busy'
          },
          {
            ID: 3,
            Name: 'Harsh',
            Status: 'Available'
          },
          {
            ID: 4,
            Name: 'Sushant',
            Status: 'Busy'
          },

        ]
      },
      {
        Region: "South",
        Members: [
          {
            ID: 1,
            Name: 'Komal',
            Status: 'Available'
          },
          {
            ID: 2,
            Name: 'Jitendra',
            Status: 'Busy'
          },
          {
            ID: 3,
            Name: 'Rijvan',
            Status: 'Available'
          },
          {
            ID: 4,
            Name: 'Mukesh',
            Status: 'Busy'
          },

        ]
      },
      {
        Region: "West",
        Members: [
          {
            ID: 1,
            Name: 'Raju',
            Status: 'Available'
          },
          {
            ID: 2,
            Name: 'Arun',
            Status: 'Busy'
          },
          {
            ID: 3,
            Name: 'Dada',
            Status: 'Available'
          },
          {
            ID: 4,
            Name: 'komal',
            Status: 'Busy'
          },

        ]
      },
      {
        Region: "North",
        Members: [
          {
            ID: 1,
            Name: 'Ranjit',
            Status: 'Available'
          },
          {
            ID: 2,
            Name: 'Golu',
            Status: 'Busy'
          },
          {
            ID: 3,
            Name: 'Ranu',
            Status: 'Available'
          },
          {
            ID: 4,
            Name: 'Sanjay',
            Status: 'Busy'
          },

        ]
      },
    ];

    

  }
  ProjectCostFunc(event:any) {
    if(event.target.innerHTML == 'Project A'){
      this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    }
    else if(event.target.innerHTML == 'Project B'){
      this.ProjectCost = 2500011;
      this.CurrentExpenditure = 86597;
      this.AvailableFunds = 42300;
    }else if(event.target.innerHTML == 'Project AB'){
      this.ProjectCost = 95025511;
      this.CurrentExpenditure = 75597;
      this.AvailableFunds = 629990;
    }else if(event.target.innerHTML == 'Project CA'){
      this.ProjectCost = 987654321;
      this.CurrentExpenditure = 968574;
      this.AvailableFunds = 695847;
    }

  };
}
