import { Component, OnInit } from '@angular/core';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: Array<any> = new Array();

  constructor(private _placesService: PlacesService) { }

  ngOnInit() {
    this._placesService.searchPlaces(1)
    .subscribe(response => {
      this.places = response.data;
      console.log(response, this.places);
    });
  }

}
