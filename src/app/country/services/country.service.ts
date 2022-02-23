import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paisInterface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  ApiUrl: string = 'https://restcountries.com/v2';
  constructor(private http: HttpClient) {}
  //método que recibe un páis y retona un obsrvable
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
