import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuessResponse } from '../models/guess-response';

@Injectable({providedIn: 'root'})
export class AppService {

  private baseUrl = 'http://localhost:8080/hangman';


  constructor(public httpClient: HttpClient) {

  }

  guess(guessChar: string, locationUri: string): Observable<GuessResponse> {
    let params = new HttpParams();
    params = params.set('letter', guessChar);
    return this.httpClient.post<GuessResponse>(`${locationUri}/guess`, '',{params});
  }

  abandon(locationUri: string): Observable<HttpResponse<any>> {
    return this.httpClient.post<HttpResponse<any>>(`${locationUri}/abanadon`, {});
  }

  start(): Observable<HttpResponse<any>> {
    return this.httpClient.post<HttpResponse<any>>(`${this.baseUrl}/start`, {});
  }

}
