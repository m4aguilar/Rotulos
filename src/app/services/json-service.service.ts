import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private httpClient: HttpClient) { }

  public getData(file): Observable<any>{
    return this.httpClient.get(file);
  }
}
