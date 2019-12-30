import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience',
   templateUrl: './experience.component.html',})
export class ExperienceComponent  {
  @Input() item: any;
}
