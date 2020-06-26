import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://pavii.ddns.net/api/grupos';
  }

  get(){
    return this.httpClient.get(this.url);
  }

}