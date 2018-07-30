import { Component, OnInit } from '@angular/core';
import * as mapbox from 'mapbox-gl';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'iconSize': [30, 30],
                'color': 'rgba(62, 54, 235, .9)'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -68.74124,
                    10.33943
                ]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'iconSize': [60, 60],
                'color': 'rgba(62, 54, 235, .5)'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [
                    -68.74124,
                    10.33943
                ]
            }
        }
    ]
};

  constructor() {
  }

  ngOnInit() {
    mapbox.accessToken = 'pk.eyJ1Ijoicm9kYXNsYSIsImEiOiJjamszOG05azAwenptM2xudHZlMW9lMzZvIn0.exxv3CG7-gPDMAVeQTeAeg';
    const map = new mapbox.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-68.74124, 10.33943],
      zoom : 15
    });

    this.geojson.features.forEach(function(marker) {
      // create a DOM element for the marker
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = marker.properties.color;
      el.style.borderRadius = '50%';
      el.style.width = marker.properties.iconSize[0] + 'px';
      el.style.height = marker.properties.iconSize[1] + 'px';

      // add marker to map
      new mapbox.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
    });
  }

}
