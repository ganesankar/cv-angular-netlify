import { Component, Input } from '@angular/core';

@Component({
  selector: 'skills',
   templateUrl: './skills.component.html',})
export class SkillsComponent  {
  title = 'materialApp'; 
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  @Input() item: any;
}
