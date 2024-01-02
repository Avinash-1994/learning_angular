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
    return this.httpClient.get<Projects[]>(this.urlPrefix+"/api/projects");
  }
}
