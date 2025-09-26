import { Injectable } from '@angular/core';

export class Billionaires {
  country: string | undefined;

  amount: number | undefined;
}

const billionaires: Billionaires[] = [
  {
    country: "China",
    amount: 1002
  },
  {
    country: "United States",
    amount: 716
  },
  {
    country: "India",
    amount: 215
  },
  {
    country: "United Kingdom",
    amount: 150
  },
  {
    country: "Germany",
    amount: 145
  }
];

@Injectable()
export class Service {
  getDataSource(): Billionaires[] {
    return billionaires;
  }
}
