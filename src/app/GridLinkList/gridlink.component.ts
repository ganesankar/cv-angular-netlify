import { Component, Input } from '@angular/core';

@Component({
  selector: 'gridlink',
   templateUrl: './gridlink.component.html',})
export class GridLinkComponent  {
  @Input() item: any;
}
