import { Component, OnInit } from '@angular/core';

import $ from 'jquery/dist/jquery';
import 'vide/dist/jquery.vide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($('#myBlock'));
  }

}