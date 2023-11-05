import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSearchComponent } from './user-list-search.component';

describe('UserListSearchComponent', () => {
  let component: UserListSearchComponent;
  let fixture: ComponentFixture<UserListSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListSearchComponent]
    });
    fixture = TestBed.createComponent(UserListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
