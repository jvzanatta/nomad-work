
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesListComponent } from './places-list.component';

describe('PlacesListComponent', () => {
  let component: PlacesListComponent;
  let fixture: ComponentFixture<PlacesListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
