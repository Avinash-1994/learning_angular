import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationService {
  urlPrefix: string = "http://localhost:9090"; 
  constructor(private httpClient:HttpClient) { }

  getClientLocations(): Observable <ClientLocation[]>{
    return this.httpClient.get<ClientLocation[]>(this.urlPrefix + '/api/clientlocations', {responseType: 'json'})
  }
}
