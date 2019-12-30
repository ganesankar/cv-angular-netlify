import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {


  
}

@NgModule({
  imports: [MatButtonModule, MatMenuModule, RouterModule,  CommonModule],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule {}