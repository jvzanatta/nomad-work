import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  @Input() hideToolbar: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  places: Array<any> = new Array();
  pageSize = 9;
  loading = true;

  constructor(private _placesService: PlacesService) { }

  ngOnInit() {
    this.getPlacesList();
  }

  /**
   * Get places from server using PlacesService
   * @param pageNumber The number of the page being displayed (starts at 1)
   */
  getPlacesList(pageNumber: number = 1) {
    this.loading = true;
    this.places = [];
    this._placesService.getPlaces(pageNumber)
      .subscribe(response => this.handleResponse(response));
  }

  /**
   * Handle the server response, feeding the places array and calling paginator
   * @param response the server response containing the results and pagination info
   */
  handleResponse(response) {
    this.loading = false;
    this.places = response.data;
    this.toPaginator(response.total);
  }

  /**
   * Configure the Material paginator to handle the amount of pages
   * @param total Total number of pages found in the server
   */
  toPaginator(total: number, ) {
    this.paginator.length = total;
  }

  /**
   * Triggers the function to get given page
   * @param $event The event fired after user asked for another page
   */
  changePage($event) {
    this.getPlacesList($event.pageIndex + 1);
  }

}
