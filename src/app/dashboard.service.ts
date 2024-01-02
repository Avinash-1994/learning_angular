import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary():any[]{
    const TeamMemberSummary = [
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
    return TeamMemberSummary;
  };
  getTeamMembersList(){
    const TeamMembers = [
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
    ]
    return TeamMembers;
  }
}
