import { Component, OnInit } from '@angular/core';

interface Price {
  background: string;
  title: string;
  titleU: string;
  photos: string;
  processing: string;
  type: string;
  resolution: number;
  term: string;
  price: number | string;
  classP?: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  prices: Price[] = [
    { background: 'url("../../../assets/img/pricing-1.jpg")', title: 'Model', titleU: 'Photography.',
      photos: 'Package of 50', processing: 'Retouch', type: 'Semi-professional', resolution: 12, term: '14 days', price: 39 },
    { background: 'url("../../../assets/img/pricing-2.jpg")', title: 'Photography of', titleU: 'events',
      photos: 'Package of 150', processing: 'Correction', type: 'Semi-professional', resolution: 32, term: '14 - 21 days', price: 59 },
    { background: 'url("../../../assets/img/pricing-3.jpg")', title: 'Corporate', titleU: 'photography.',
      photos: 'Package of 500', processing: 'Correction, Retouch', type: 'Professional', resolution: 48, term: '30 days', price: 39 },
    { background: 'url("../../../assets/img/pricing-4.jpg")', title: 'Photography for', titleU: 'movies.',
      photos: 'Unlimited', processing: 'All types of installation', type: 'Professional', resolution: 68, term: 'Individual', price: 'Individual',
      classP: 'text' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
