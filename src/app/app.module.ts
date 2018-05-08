import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as jQuery from 'jquery';
//import * as d3 from 'd3';
//import * as nv from 'nvd3';

import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { Select2Module } from 'ng2-select2';


//needed in all
import { RickshawChartModule } from './directives/rickshaw/rickshaw.module';
import { Nvd3ChartModule } from './directives/nvd3/nvd3.module';
//import { MorrisChartModule } from './directives/morris/morris.module';
import { JqSparklineModule } from './directives/sparkline/sparkline.module';
//import { FlotChartModule } from './directives/flot/flot.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListDataSourceComponent } from './list-data-source/list-data-source.component';
import { SourceInfoComponent } from './source-info/source-info.component';
import { ChartsComponent } from './charts/charts.component';

/*import {
  DatetimeTransparent
} from '../ui/datetime-transparent.directive';*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListDataSourceComponent,
    SourceInfoComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NKDatetimeModule,
    Select2Module,
    RickshawChartModule,
    Nvd3ChartModule,
    JqSparklineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
