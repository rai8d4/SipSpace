import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../models/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private apiUrl = 'https://sipspace.onrender.com/api/visits';

  constructor(private http: HttpClient) {}

  getVisits() {
    return this.http.get<Visit[]>(this.apiUrl);
  }

  getVisit(id: string) {
    return this.http.get<Visit>(`${this.apiUrl}/${id}`);
  }

  addVisit(visit: Visit) {
    return this.http.post<Visit>(this.apiUrl, visit);
  }

  updateVisit(id: string, visit: Visit) {
    return this.http.put<Visit>(`${this.apiUrl}/${id}`, visit);
  }

  deleteVisit(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}