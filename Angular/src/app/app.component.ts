import { Component } from '@angular/core';
import { DxPieChartTypes } from 'devextreme-angular/ui/pie-chart';
import { Billionaire } from './app.types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  billionaires: Billionaire[] = [
    {
      country: 'China',
      amount: 1002,
    },
    {
      country: 'United States',
      amount: 716,
    },
    {
      country: 'India',
      amount: 215,
    },
    {
      country: 'United Kingdom',
      amount: 150,
    },
    {
      country: 'Germany',
      amount: 145,
    },
  ];

  customizeText = (pointInfo: any): string => `${pointInfo.value} billionaires`;

  contentTemplate = (data: any): string => data.argumentText as string;

  onPointClick(e: DxPieChartTypes.PointClickEvent): void {
    const point = e.target;
    if (point.isSelected()) {
      point.clearSelection();
    } else {
      point.select();
    }
  }
}
