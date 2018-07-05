import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewsListComponent } from './user-reviews-list.component';

describe('UserReviewsListComponent', () => {
  let component: UserReviewsListComponent;
  let fixture: ComponentFixture<UserReviewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
