
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesComponent } from './places.component';

describe('PlacesComponent', () => {
  let component: PlacesComponent;
  let fixture: ComponentFixture<PlacesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
