import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare let jQuery: any;
declare let d3: any;
declare let nv: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {
  flotBarsData: Array<any>;
  flotBarsOptions: any;
  sparklineCompositeData: Array<any>;
  sparklineCompositeOptions: Array<any>;
  sparklinePieData: Array<any>;
  sparklinePieOptions: any;
  morris1Options: any;
  morris2Options: any;
  morris3Options: any;
  nvd31Chart: any;
  nvd31Data: any;
  nvd32Chart: any;
  nvd32Data: any;

  data1: Array<any> = [
    [1, 20],
    [2, 20],
    [3, 40],
    [4, 30],
    [5, 40],
    [6, 35],
    [7, 47]
  ];
  data2: Array<any> = [
    [1, 13],
    [2, 8],
    [3, 17],
    [4, 10],
    [5, 17],
    [6, 15],
    [7, 16]
  ];
  data3: Array<any> = [
    [1, 23],
    [2, 13],
    [3, 33],
    [4, 16],
    [5, 32],
    [6, 28],
    [7, 31]
  ];

	applyNvd3Data(): void {
	    /* Inspired by Lee Byron's test data generator. */
	    function _stream_layers(n, m, o): Array<any> {
	      if (arguments.length < 3) { o = 0; }
	      function bump(a): void {
	        let x = 1 / (.1 + Math.random()),
	          y = 2 * Math.random() - .5,
	          z = 10 / (.1 + Math.random());
	        for (let i = 0; i < m; i++) {
	          let w = (i / m - y) * z;
	          a[i] += x * Math.exp(-w * w);
	        }
	      }
	      return d3.range(n).map(function(): Array<Object> {
	        let a = [], i;
	        for (i = 0; i < m; i++) { a[i] = o + o * Math.random(); }
	        for (i = 0; i < 5; i++) { bump(a); }
	        return a.map(function(d, iItem): Object {
	          return {x: iItem, y: Math.max(0, d)};
	        });
	      });
	    }

	    function testData(streamNames, pointCount): Array<any> {
	      let now = new Date().getTime(),
	        day = 1000 * 60 * 60 * 24, // milliseconds
	        daysAgoCount = 60,
	        daysAgo = daysAgoCount * day,
	        daysAgoDate = now - daysAgo,
	        pointsCount = pointCount || 45, // less for better performance
	        daysPerPoint = daysAgoCount / pointsCount;
	      return _stream_layers(streamNames.length, pointsCount, .1).map(function(data, i): Object {
	        return {
	          key: streamNames[i],
	          values: data.map(function(d, j): Object {
	            return {
	              x: daysAgoDate + d.x * day * daysPerPoint,
	              y: Math.floor(d.y * 100) // just a coefficient,
	            };
	          })
	        };
	      });
	    }

	    this.nvd31Chart = nv.models.lineChart()
	      .useInteractiveGuideline(true)
	      .margin({left: 28, bottom: 30, right: 0})
	      .color(['#82DFD6', '#ddd']);

	    this.nvd31Chart.xAxis
	      .showMaxMin(false)
	      .tickFormat(function(d): Object { return d3.time.format('%b %d')(new Date(d)); });

	    this.nvd31Chart.yAxis
	      .showMaxMin(false)
	      .tickFormat(d3.format(',f'));

	    this.nvd31Data = testData(['Bancos', 'Financeiras'], 50).map(function(el, i): boolean {
	      el.area = true;
	      return el;
	    });

	   /* this.nvd32Chart = nv.models.multiBarChart()
	      .margin({left: 28, bottom: 30, right: 0})
	      .color(['#F7653F', '#ddd']);

	    this.nvd32Chart.xAxis
	      .showMaxMin(false)
	      .tickFormat(function(d): Object { return d3.time.format('%b %d')(new Date(d)); });

	    this.nvd32Chart.yAxis
	      .showMaxMin(false)
	      .tickFormat(d3.format(',f'));

	    this.nvd32Data = testData(['Uploads', 'Downloads'], 10).map(function(el, i): boolean {
	      el.area = true;
	      return el;
	    });*/
	};

  ngOnInit(): void {


    this.applyNvd3Data();


  }


}
