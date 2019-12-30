import { Component, Input } from '@angular/core';

@Component({
  selector: 'education',
   templateUrl: './edu.component.html',})
export class EducationComponent  {
  @Input() item: any;
}
