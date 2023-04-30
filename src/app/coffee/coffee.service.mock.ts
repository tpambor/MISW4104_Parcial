import { Observable, of } from 'rxjs';

import { Coffee } from './coffee';
import { createRandomCoffee } from './coffee.mock';

export class MockCoffeeService {
  coffeeData: Coffee[];

  constructor() {
    // Create random test data to mock the actual data returned by the api
    this.coffeeData = Array.from({length: 3},
      () => createRandomCoffee()
    );
  }

  getCoffees(): Observable<Coffee[]> {
    return of([...this.coffeeData]);
  }

}
