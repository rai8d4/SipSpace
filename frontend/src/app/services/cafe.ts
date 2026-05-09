import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from '../models/cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl = 'https://sipspace.onrender.com/api/cafes';

  constructor(private http: HttpClient) {}

  getCafes() {
    return this.http.get<Cafe[]>(this.apiUrl);
  }

  getCafe(id: string) {
    return this.http.get<Cafe>(`${this.apiUrl}/${id}`);
  }

  addCafe(cafe: Cafe) {
    return this.http.post<Cafe>(this.apiUrl, cafe);
  }

  updateCafe(id: string, cafe: Cafe) {
    return this.http.put<Cafe>(`${this.apiUrl}/${id}`, cafe);
  }

  deleteCafe(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}