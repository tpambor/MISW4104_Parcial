/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { CoffeeService } from './coffee.service';
import { createRandomCoffee } from './coffee.mock';

describe('Service: Coffee', () => {
  let service: CoffeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CoffeeService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getCoffees should make a GET HTTP request and return all coffees', () => {
    // Create random test data to mock the actual data returned by the api
    const mockCoffeeData = Array.from({length: 3},
      () => createRandomCoffee()
    );

    service.getCoffees().subscribe(data => {
      expect(data).toEqual(mockCoffeeData);
    });

    const req = httpTestingController.expectOne(environment.coffeeApiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush([...mockCoffeeData]);
  });
});
