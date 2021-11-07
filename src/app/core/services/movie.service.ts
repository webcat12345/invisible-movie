import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) {
  }

  getMovies(page = 0, limit = 10): Observable<Movie[]> {
    const url = `/api/movies`;
    const params = new HttpParams().append('page', page).append('limit', limit);
    return this.http.get<Movie[]>(url, { params });
  }
}
