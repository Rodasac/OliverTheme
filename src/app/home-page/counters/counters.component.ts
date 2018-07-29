/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../../node_modules/@types/waypoints/jquery.d.ts" />
/// <reference path="../../../../node_modules/@types/jquery-countto/index.d.ts" />
/// <reference path="../../../typings.d.ts" />

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function(_$) {
    //   _$('.counter').counterUp({
    //       delay: 10,
    //       time: 1000
    //   });
    // });
  }

}
