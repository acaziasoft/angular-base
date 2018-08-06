import { Component, OnInit } from '@angular/core';
import {PublicBaseComponent} from '../public-base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PublicBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
