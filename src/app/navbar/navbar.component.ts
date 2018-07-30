import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('toggler') toggler: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  unToggle(e) {
    const show = document.getElementById('navbarNav').classList.contains('show');

    if(show) {
      this.toggler.nativeElement.click();
    }
  }
}
