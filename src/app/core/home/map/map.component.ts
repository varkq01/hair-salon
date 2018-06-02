import { Component, OnInit, ViewChild } from '@angular/core';
import{} from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { 
  }

  ngOnInit() {
    this.initMap();    
  }

  initMap() {
    var location = new google.maps.LatLng(51.7923662, 19.3841679);

    var mapOptions = {
        center: location,
        zoom: 16,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);

    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    var contentString = '<div class="info-window">' +
            '<h3>Hair Studio</h3>' +
            '<p>Salon piękności</p>' +
            '<p>Godziny otwarcia:</p>' + 
            '<p>Pon - Pt 08:00 - 18:00</p>' +                                   
            '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    this.map = map;

}
}
