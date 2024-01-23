import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuardService } from './can-activate-guard.service';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'Dashboard',
    component:DashboardComponent,
    canActivate:[CanActivateGuardService],
    data:{
      expectedRole:"Admin"
    }
  },
  {
    path:'About',
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:'projects',
    component:ProjectsComponent,
    canActivate:[CanActivateGuardService],
    data:{
      expectedRole:"Admin"
    }
  },
  {
    path:"**",
    redirectTo:"login",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
