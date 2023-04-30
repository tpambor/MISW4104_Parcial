import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Coffee[] = [];
  totalPerType: {[type: string]: number} = {};

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.totalPerType = this.getTotalPerType();
    });
  }

  getTotalPerType(): {[type: string]: number} {
    const total: {[type: string]: number} = {};

    for (const coffee of this.coffees) {
      total[coffee.tipo] = total[coffee.tipo] ? total[coffee.tipo] + 1 : 1;
    }

    return total;
  }

  ngOnInit() {
    this.getCoffees();
  }

}
