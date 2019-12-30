import { Component, Input, NgModule, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'expertise',
  templateUrl: './expertise.component.html',
})
export class ExpertiseComponent implements OnInit {
  list = [];
  @Input() item: any;
  ngOnInit() { this.list = _.groupBy(this.item.values, 'desc'); }
}
