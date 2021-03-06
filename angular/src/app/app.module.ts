import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import {
    DxPieChartModule
} from 'devextreme-angular';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxPieChartModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }