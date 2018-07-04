import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PlacesService } from '../../services/places.service';
import { Observable, of, throwError, Subject } from 'rxjs';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss']
})
export class PlaceFormComponent implements OnInit {

  typeOptions: Array<string> = ['Café', 'Restaurante', 'Coworking', 'Livraria', 'Outro'];
  place: any = {};
  disableInternetSpeed: boolean;
  disableHasPassword: boolean;
  disablePassword: boolean;
  placeReadOnly: boolean;
  reviewReadOnly: boolean;
  isPlaceAuthor: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _placesService: PlacesService
  ) {}

  ngOnInit() {
    this.getPlaceData();
  }

  getPlaceData() {
    this.place = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._placesService.getPlace(params.get('id')))
    ).subscribe(place => {
      this.place = place;
      // this.isPlaceAuthor = this.place.registered_by === this.user.id;
    });
  }

  setInternetFields(event) {
    this.disableInternetSpeed = !event.checked;
    this.disableHasPassword = !event.cheked;
    this.disablePassword = !event.checked;
  }

  setInternetPasswordField(event) {
    this.disablePassword = !event.checked;
  }

}
