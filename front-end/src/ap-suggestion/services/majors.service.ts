import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Major } from '../../models/major.model';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {
  private apiUrl = `${environment.apiUrl}/majors`;

  constructor(private http: HttpClient) {}

  getAllMajors(): Observable<Major[]> {
    return this.http.get<Major[]>(this.apiUrl);
  }

  getMajorById(id: string): Observable<Major> {
    return this.http.get<Major>(`${this.apiUrl}/${id}`);
  }

}