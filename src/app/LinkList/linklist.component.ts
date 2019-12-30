import { Component, Input } from '@angular/core';

@Component({
  selector: 'linklist',
   templateUrl: './linklist.component.html',})
export class LinkListComponent  {
  @Input() item: any;
}
