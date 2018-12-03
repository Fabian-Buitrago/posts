import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

	getData<T>(url: string): Observable<T[]> {
		return this.http.get<T[]>(url);
	}
}
