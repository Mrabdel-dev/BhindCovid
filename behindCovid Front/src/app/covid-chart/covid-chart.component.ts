import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {
  @Input('totalConfirmed')
  totalConfirmed ;
  @Input('totalDeaths')
  totalDeaths ;
  @Input('totalRecovred')
  totalRecovred ;
  @Input('totalActive')
  totalActive ;
  constructor() { }

  ngOnInit(): void {
  }

}
