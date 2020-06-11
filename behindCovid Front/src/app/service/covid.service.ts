import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GeneraleData} from '../models/generaleData';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
private generaleDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/06-08-2020.csv';
  constructor(private http: HttpClient) { }
  getGeneralData(){
    return this.http.get(this.generaleDataUrl, {responseType : 'text'}).pipe(
      map(result => {
        let data: GeneraleData[] = [];
        let abdel = {};
        let rows = result.split('\n');
        rows.splice(0, 1);
        // console.log(rows);
        rows.forEach(row => {
          let cols = row.split(/,(?=\S)/)

          let cs = {
            country: cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10],
          };
          let tempVar: GeneraleData = abdel[cs.country];
          if (tempVar) {
            tempVar.active = cs.active + tempVar.active
            tempVar.confirmed = cs.confirmed + tempVar.confirmed
            tempVar.deaths = cs.deaths + tempVar.deaths
            tempVar.recovered = cs.recovered + tempVar.recovered

            abdel[cs.country] = tempVar;
          } else {
            abdel[cs.country] = cs;
          }
        })
        return <GeneraleData[]>Object.values(abdel);
    })
    );
  }

}
