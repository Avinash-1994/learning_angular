import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  userPrefix:string = "http://localhost:9090" 
  constructor(private httpClient: HttpClient) { }

  getCountries():Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.userPrefix + "/api/countries", {responseType: "json"})
  }
}
