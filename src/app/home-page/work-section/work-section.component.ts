import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Work {
  img;
  make;
  model;
  shutter;
  aperture;
  focal;
  iso;
}

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent implements OnInit {

  works: Work[] = [
    {
      img: '../../../assets/img/work-1.jpg',
      make: 'Cannon',
      model: 'Cannon EOS 5D Mark II',
      shutter: '1/4000s',
      aperture: 'f/4.5',
      focal: '230mm',
      iso: 250
    },
    {
      img: '../../../assets/img/work-4.jpg',
      make: 'Cannon',
      model: 'Cannon EOS 5D Mark II',
      shutter: '1/4000s',
      aperture: 'f/4.5',
      focal: '230mm',
      iso: 250
    },
    {
      img: '../../../assets/img/work-1.jpg',
      make: 'Cannon',
      model: 'Cannon EOS 5D Mark II',
      shutter: '1/4000s',
      aperture: 'f/4.5',
      focal: '230mm',
      iso: 250
    },
    {
      img: '../../../assets/img/work-4.jpg',
      make: 'Cannon',
      model: 'Cannon EOS 5D Mark II',
      shutter: '1/4000s',
      aperture: 'f/4.5',
      focal: '230mm',
      iso: 250
    },
    {
      img: '../../../assets/img/work-1.jpg',
      make: 'Cannon',
      model: 'Cannon EOS 5D Mark II',
      shutter: '1/4000s',
      aperture: 'f/4.5',
      focal: '230mm',
      iso: 250
    },
    {
      img: '../../../assets/img/work-4.jpg',
      make: 'Cannon',
      model: 'Cannon EOS 5D Mark II',
      shutter: '1/4000s',
      aperture: 'f/4.5',
      focal: '230mm',
      iso: 250
    },
  ];

  infoIcon = faInfoCircle;

  constructor() { }

  ngOnInit() {
  }

  hoverDetail(e: Event) {
    $(e.currentTarget).prev().toggleClass('hover');
  }

}
