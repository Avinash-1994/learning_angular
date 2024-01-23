import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Projects } from './projects';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  urlPrefix: string = "http://localhost:9090";
  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.urlPrefix + "/api/projects", {responseType: "json" })
      .pipe(map((data: Projects[]) => {
        for (let i = 0; i < data.length; i++) {
          data[i].teamSize = data[i].teamSize * 100;
        }
        return data;
      }));
  }

  insertProject(newProject: Projects): Observable<Projects[]> {
    return this.httpClient.post<Projects[]>(this.urlPrefix + "/api/projects", newProject, {responseType: "json" })
  }

  updateProject(existingProject: Projects): Observable<Projects> {
    return this.httpClient.put<Projects>(this.urlPrefix + "/api/projects", existingProject, {responseType: "json" })
  }
  deleteProject(projectID: number): Observable<string> {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?projectID=" + projectID)
  }
  SearchProjects(searchBy: string, searchText: string): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.urlPrefix + "/api/projects/search/" + searchBy + "/" + searchText, {responseType: "json" })
  }
}
