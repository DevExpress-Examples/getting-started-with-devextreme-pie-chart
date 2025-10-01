import { Component } from '@angular/core';
import { Billionaires, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
})

export class AppComponent {
  billionaires: Billionaires[];

  constructor(service: Service) {
    this.billionaires = service.getDataSource();
  }

  customizeText (pointInfo: any) {
    return pointInfo.value + " billionaires";
  }

  contentTemplate (data: any) {
    return data.argumentText;
  }
  
  onPointClick (e: any) {
    const point = e.target;
    if (point.isSelected()) {
      point.clearSelection();
    } else {
      point.select();
    }
  }
}
