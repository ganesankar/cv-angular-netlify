import { Component, Input } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent {

  @Input() item: any;
}
