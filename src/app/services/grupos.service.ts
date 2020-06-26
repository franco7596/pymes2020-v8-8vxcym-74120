import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { ModeloGrupo } from '../models/modelo-grupo';

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

  post(objeto: ModeloGrupo){
    return this.httpClient.post(this.url, objeto);
  }

}