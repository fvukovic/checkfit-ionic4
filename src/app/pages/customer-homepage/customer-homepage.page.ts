import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
declare var google;
@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.page.html',
  styleUrls: ['./customer-homepage.page.scss'],
})
export class CustomerHomepagePage implements OnInit,AfterContentInit {
   map; 
  @ViewChild("mapElement", { static: true }) mapElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }
}
