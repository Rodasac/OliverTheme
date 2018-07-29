import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef, ViewChild} from '@angular/core';
import { Subject } from 'rxjs';
import {OwlCarousel} from 'ngx-owl-carousel';
import * as $ from 'jquery';

interface Client {
  image: string;
  name: string;
  nameS: string;
  company: string;
  cite: string;
}


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('owlEl') owlEl: OwlCarousel;

  pagesSubject = new Subject<any>();
  carouselOptions: any =  {
    dots: false,
    loop: true,
    navigation: false,
    responsive: {
      '0': { items: 1 },
      '768': { items: 2 }
    },
    center: true,
    onChange: (e) => { this.pagesSubject.next(e); }
  };

  page = 1;
  pages = 0;

  clients: Client[] = [
    { image: '../../../assets/img/client_image_01.jpg',
     name: 'Alison ', nameS: 'Cooper', company: 'LEX Сompany',
     cite: `For me design — is a quality of life. Good design
      has little to do with trends. Tired of listening to him
      trying to give a frivolous status of a fashion phenomenon.
      In my opinion, the designer should strive to do something
      more than individual things.`},
    { image: '../../../assets/img/client_image_02.jpg',
     name: 'Cristian', nameS: 'Newman', company: 'Flex Production',
     cite: `For me design — is a quality of life. Good design
      has little to do with trends. Tired of listening to him
      trying to give a frivolous status of a fashion phenomenon.
      In my opinion, the designer should strive to do something
      more than individual things.`},
    { image: '../../../assets/img/client_image_03.jpg',
     name: 'Jennifer', nameS: 'Palliam', company: 'ONE Plus Agency',
     cite: `I like people with a sophisticated mind and at the
      same time simple in communication. These qualities can be
      combined quite naturally. However, objects, like people,
      look pathetic if these properties are connected in them
      artificially.`},
  ];

  constructor(private cdRef: ChangeDetectorRef) {
    this.pagesSubject.subscribe(e => {
      const item = e.item.index  < 4 ? e.item.index : e.item.index - 3;
      this.page = item === 0 ? 1 : item;
      this.pages = e.item.count;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.pagesSubject.unsubscribe();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  prev() {
    this.owlEl.previous();
  }

  next() {
    this.owlEl.next();
  }

}
