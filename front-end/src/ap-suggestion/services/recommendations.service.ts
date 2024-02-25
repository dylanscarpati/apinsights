import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApClass } from '../../models/ap-class.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  private apiUrl = `${environment.apiUrl}/recommendations`;

  constructor(private http: HttpClient) { }

  getRecommendations(major1: string, major2: string): Observable<ApClass[]> {
    // Construct the query parameters
    const queryParams = `?major1=${encodeURIComponent(major1)}&major2=${encodeURIComponent(major2)}`;

    return this.http.get<ApClass[]>(`${this.apiUrl}${queryParams}`);
  }
}
