import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Projects } from './projects';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService
{
  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<Projects[]>
  {
    return this.httpClient.get<Projects[]>(this.urlPrefix + "/api/projects", { responseType: "json" })
      .pipe(map((data: Projects[]) =>{
          for (let i = 0; i < data.length; i++)
          {
            // data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ));
  }

  getProjectByProjectID(ProjectID:number):Observable<Projects>{
    return this.httpClient.get<Projects>(this.urlPrefix + "/api/projects/searchbyprojectid/" + ProjectID, {responseType:"json"})
  }


  insertProject(newProject: Projects): Observable<Projects>
  {
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
    return this.httpClient.post<Projects>(this.urlPrefix + "/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
  }

  updateProject(existingProject: Projects): Observable<Projects>
  {
    return this.httpClient.put<Projects>(this.urlPrefix + "/api/projects", existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?ProjectID=" + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Projects[]>
  {
    return this.httpClient.get<Projects[]>(this.urlPrefix + "/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }
}