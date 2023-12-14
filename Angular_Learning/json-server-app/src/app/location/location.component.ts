import {Component, OnInit} from '@angular/core';
import {LocationService} from "./location.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit{

  constructor(private locationService : LocationService) {
  }


  ngOnInit() {
    // console.log(this.locationService.getAllHousingLocations().then((data) => {
    //   console.log(data);
    // }));

    // console.log(this.locationService.getHousingLocationById(1).then((data) => {
    //   console.log(data);
    // }));

    const  location = {
      "id": 10,
      "name": "Capital Safe Towns",
      "city": "Portland",
      "state": "Florida",
      "photo": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
      "wifi": true,
      "laundry": true

    };

    //this.locationService.addHousingLocation(location);

    this.locationService.deleteLocation(location);
  }

}
