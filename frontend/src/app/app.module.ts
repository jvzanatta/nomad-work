import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatProgressSpinnerModule, MatInputModule,
  MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatSelectModule,
  MatExpansionModule, MatChipsModule } from '@angular/material';

// Components
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { PlaceFormComponent } from './components/place-form/place-form.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { UserReviewsListComponent } from './components/user-reviews-list/user-reviews-list.component';

// Services
import { PlacesService } from './services/places.service';
import { UsersService } from './services/users.service';

// Pipes
import { NumToArrayPipe } from './pipes/num-to-array.pipe';

// TODO: move to routing file
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id/reviews', component: UserReviewsListComponent },
  { path: 'places', component: PlacesListComponent },
  { path: 'place/:id', component: PlaceFormComponent },

  { path: '', redirectTo: '/places', pathMatch: 'full' },
  { path: '**', redirectTo: '/places' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    AboutComponent,
    SearchComponent,
    UserComponent,
    PlaceFormComponent,
    PlacesListComponent,
    NumToArrayPipe,
    UserReviewsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes/*, { enableTracing: true }*/),
    LayoutModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    PlacesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
