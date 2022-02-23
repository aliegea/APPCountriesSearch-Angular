import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/paisInterface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = 'pais';
  hayError: boolean = false;
  countries: Country[] = [];

  buscar(term: string) {
    this.hayError = false;
    this.countryService.buscarPais(term).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.countries = res;
        },
        error: (err) => {
          this.hayError = true;
          this.countries = [];
        },
      }
      // (res) => {
      //   console.log(res);
      //   this.countries = res;
      // },
      // (err) => {
      //   this.hayError = true;
      //   this.countries = [];
    );
  }
  constructor(private countryService: CountryService) {}
}
