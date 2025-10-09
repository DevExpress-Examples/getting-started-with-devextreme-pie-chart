import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxPieChartModule } from 'devextreme-angular/ui/pie-chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxPieChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
