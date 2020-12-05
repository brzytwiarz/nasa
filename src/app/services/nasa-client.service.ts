import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaClientService {
  apiKey = 'qhp8yF0AuxUMfdJalSRzA3dlUgdvAKyecYJEdOfg';
  url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + this.apiKey;

  constructor(private http: HttpClient) { }

  public getPhoto():any{
    return this.http.get(this.url);
  }
}
