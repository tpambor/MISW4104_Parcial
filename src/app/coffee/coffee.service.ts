import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

constructor(private http: HttpClient) { }

  /**
   * Return all coffees.
   */
  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(environment.coffeeApiUrl);
  }

}
