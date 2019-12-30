import { Component, Input } from '@angular/core';

@Component({
  selector: 'intro',
  template: `<div> 
  <h1>{{item.name}}</h1>
    <div [innerHTML]="item.desc | sanitizeHtml"></div></div>`
})
export class IntroComponent  {
  @Input() item: any;
}
