import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts
  chartOptions = {}

  constructor(){
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Student Admission 2023',
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      credits:{
        enabled:false
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Course',
          colorByPoint: true,
          data: [{
              name: 'MEARN',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'PYTHON',
              y: 14.77
          },  {
              name: 'TESTING',
              y: 4.86
          }, {
              name: '.NET',
              y: 2.63
          }, {
              name: 'BIG DATA',
              y: 1.53
          },  {
              name: 'FLUTTER',
              y: 1.40
          }, {
              name: 'JAVA SPRING',
              y: 0.84
          }, {
              name: 'PHP',
              y: 0.51
          }, {
              name: 'JAVA',
              y: 2.6
          }]
      }]
  }
  }
}
