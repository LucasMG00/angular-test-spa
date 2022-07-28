import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiResponse = {
  info: {},
  results: {},
}

@Injectable({
  providedIn: 'root'
})
export class RickmortyApiService {

  contentUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient ) { }

  listar():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.contentUrl)
  }
}
