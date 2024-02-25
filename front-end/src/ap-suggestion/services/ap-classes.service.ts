import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApClass } from '../../models/ap-class.model';

@Injectable({
  providedIn: 'root',
})
export class ApClassesService {
  private apiUrl = `${environment.apiUrl}/ap-classes`;

  constructor(private http: HttpClient) {}

  getAllApClasses(): Observable<ApClass[]> {
    return this.http.get<ApClass[]>(this.apiUrl);
  }

  getApClassById(id: string): Observable<ApClass> {
    return this.http.get<ApClass>(`${this.apiUrl}/${id}`);
  }

  submitTakenApClasses(takenApClasses: string[]): Observable<{ status: string }> {
    return this.http.post<{ status: string }>(`${this.apiUrl}/taken`, { takenApClasses });
  }
}