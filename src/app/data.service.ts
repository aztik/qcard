import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

import * as countries from '../assets/countries.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() {
  }

public getCountries(): Observable<any> {
  return of(countries);
}
}
