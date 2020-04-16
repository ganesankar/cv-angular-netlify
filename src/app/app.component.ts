import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'Angular 5';
  users = [];
  list = [];

  apiUrl = 'https://ganesan-cv-reactjs.netlify.app/.netlify/functions/cv-all';

  GetData() {
    this.http.get<any[]>(this.apiUrl)
      .subscribe(data => {
        this.users = data;
        if (data.length > 0) {
          const se = [];
          data.forEach(function (item, index) {
            se.push(item.data);
          });
          this.list = se.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));;
        }
      });
  }

  ClearData() {
    this.users = [];
  }

  constructor(private http: HttpClient) { }
  ngOnInit() { this.GetData() }

}
