/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';
import { MockCoffeeService } from '../coffee.service.mock';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  const mockCoffeeService = new MockCoffeeService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ],
      providers: [{ provide: CoffeeService, useValue: mockCoffeeService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table header', () => {
    const headers = fixture.debugElement.queryAll(By.css('thead tr'));
    expect(headers).toHaveSize(1);
  });

  it('should have a table row for each coffee', () => {
    const coffees = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(coffees).toHaveSize(mockCoffeeService.coffeeData.length);

    for (let i = 0; i < coffees.length; i++) {
      const coffee = coffees[i];
      // each row should have a th element for the id of the coffee
      const headers = coffee.queryAll(By.css('th'));
      expect(headers).toHaveSize(1);
      expect(headers[0].nativeElement.textContent).toBe(String(mockCoffeeService.coffeeData[i].id));

      // each row should have a td element for the name, type and region of the coffee
      const fields = coffee.queryAll(By.css('td'));
      expect(fields).toHaveSize(3);

      expect(fields[0].nativeElement.textContent).toBe(mockCoffeeService.coffeeData[i].nombre);
      expect(fields[1].nativeElement.textContent).toBe(mockCoffeeService.coffeeData[i].tipo);
      expect(fields[2].nativeElement.textContent).toBe(mockCoffeeService.coffeeData[i].region);
    }
  });
});
