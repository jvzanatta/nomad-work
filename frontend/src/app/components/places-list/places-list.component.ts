import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  places: Array<any> = new Array();
  pageSize = 9;

  constructor(private _placesService: PlacesService) { }

  ngOnInit() {
    this.getPlacesList();
  }

  // TODO: paginate the list
  getPlacesList(pageNumber: number = 1) {
    this._placesService.getPlaces(pageNumber)
      .subscribe(response => this.handleResponse(response));
  }

  handleResponse(response) {
    this.places = response.data;
    this.toPaginator(response.total);
  }

  toPaginator(total: number, ) {
    this.paginator.length = total;
  }

  changePage($event) {
    console.log($event);
    this.getPlacesList($event.pageIndex + 1);
  }

}
