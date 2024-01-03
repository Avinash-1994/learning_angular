import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './projects';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  urlPrefix: string = "http://localhost:9090"; 
  constructor(private httpClient:HttpClient) { }

  getAllProjects(): Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.urlPrefix + "/api/projects", {responseType:"json"});
  }

  insertProject(newProject:Projects):Observable<Projects[]>{
    return this.httpClient.post<Projects[]>(this.urlPrefix + "/api/projects", newProject, {responseType:"json"})
  }

  updateProject(existingProject:Projects):Observable<Projects>{
    return this.httpClient.put<Projects>(this.urlPrefix + "/api/projects", existingProject, {responseType:"json"})
  }
  deleteProject(projectID:number):Observable<string>{
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?projectID=" + projectID)
  }
  
}
