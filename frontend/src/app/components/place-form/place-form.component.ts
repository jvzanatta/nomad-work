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
  readOnly: boolean;
  loading = true;
  avgOverallRating: number;
  avgServiceRating: number;
  avgPriceRating: number;
  avgCozinessRating: number;
  avgQuietnessRating: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _placesService: PlacesService
  ) {}

  // TODO: If route is /users/id/reviews, get user id and filter his/hers reviews
  ngOnInit() {
    this.getPlaceData();
    this.setEditable();
  }

  /**
   * Set readOnly control variable so data is not editable.
   * TODO: check if the auth user is the same and then allow him/her to edit the place.
   */
  setEditable() {
    this.readOnly = true;
  }

  /**
   * Get place's data from server using PlacesService
   */
  getPlaceData() {
    this.place = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this._placesService.getPlace(params.get('id')))
      ).subscribe(place => {
        this.loading = false;
        this.setPlace(place);
      });
  }

  /**
   * Set the place variable and triggers average calculations
   */
  setPlace(place) {
    this.place = place;
    this.calculateAverageRatings();
  }

  /**
   * Get the average overall rating for the place (rounded)
   * TODO: Get from server side instead of calculating it
   */
  calculateAverageRatings() {
    this.avgOverallRating = 0;
    this.avgServiceRating = 0;
    this.avgPriceRating = 0;
    this.avgCozinessRating = 0;
    this.avgQuietnessRating = 0;

    this.place.reviews.forEach(review => {
      this.avgOverallRating += review.overall_rating;
      this.avgServiceRating += review.service_rating;
      this.avgPriceRating += review.price_rating;
      this.avgCozinessRating += review.coziness_rating;
      this.avgQuietnessRating += review.quietness_rating;
    });
    this.avgOverallRating = Math.round(this.avgOverallRating / this.place.reviews.length);
    this.avgServiceRating = Math.round(this.avgServiceRating / this.place.reviews.length);
    this.avgPriceRating = Math.round(this.avgPriceRating / this.place.reviews.length);
    this.avgCozinessRating = Math.round(this.avgCozinessRating / this.place.reviews.length);
    this.avgQuietnessRating = Math.round(this.avgQuietnessRating / this.place.reviews.length);
  }

}
