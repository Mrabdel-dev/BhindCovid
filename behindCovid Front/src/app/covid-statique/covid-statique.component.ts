import { Component, OnInit } from '@angular/core';
import {CovidService} from '../service/covid.service';
import {GeneraleData} from '../models/generaleData';
import {GoogleChartInterface} from 'ng2-google-charts';

@Component({
  selector: 'app-covid-statique',
  templateUrl: './covid-statique.component.html',
  styleUrls: ['./covid-statique.component.css']
})
export class CovidStatiqueComponent implements OnInit {
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovred = 0;
  totalActive = 0;
  list: GeneraleData[] = [];
  country: string[] = [];
  pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  };

  constructor(private covidSe: CovidService) {
  }

  ngOnInit(): void {
    this.covidSe.getGeneralData().subscribe(
      {
        next: (result) => {
          console.log(result);
          this.list = result;
          result.forEach(cs => {
            this.country.push(cs.country);
            if (!Number.isNaN(cs.confirmed)) {
              this.totalConfirmed += cs.confirmed;
              this.totalDeaths += cs.deaths;
              this.totalRecovred += cs.recovered;
              this.totalActive += cs.active;
            }
          });
          this.chartconfigure();
        }
      }
    );

  }

  update(value: string) {
    console.log(value);
    this.list.forEach(cs => {
      // tslint:disable-next-line:triple-equals
      if (cs.country == value) {
        this.totalConfirmed = cs.confirmed;
        this.totalDeaths = cs.deaths;
        this.totalRecovred = cs.recovered;
        this.totalActive = cs.active;
      }
    });

  }

  chartconfigure() {
    let table = [];
    table.push(['Country', 'Cases']);
    this.list.forEach(ls => {
      table.push([ls.country, ls.confirmed]);
      console.log(table);
    });
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: table,
      options: {
        title: 'COVID-19 World  Statistic',
        height: 500,
        is3D: true,
        animation: {
          duration: 1000,
          easing: 'out',
        },
      }
    };
  }
}
