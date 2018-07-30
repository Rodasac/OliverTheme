import { Component, OnInit } from '@angular/core';

interface Sponsor {
  image: string;
}

interface SponsorRow {
  row: Sponsor[];
}

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  sponsorRows: SponsorRow[] = [
    {
      row: [
        { image: '../../../assets/img/brand_logo_01.png' },
        { image: '../../../assets/img/brand_logo_02.png' },
        { image: '../../../assets/img/brand_logo_03.png' },
        { image: '../../../assets/img/brand_logo_04.png' },
      ]
    },
    {
      row: [
        { image: '../../../assets/img/brand_logo_05.png' },
        { image: '../../../assets/img/brand_logo_06.png' },
        { image: '../../../assets/img/brand_logo_07.png' },
        { image: '../../../assets/img/brand_logo_08.png' },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
