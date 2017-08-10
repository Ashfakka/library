import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontactComponent } from './usercontact.component';

describe('UsercontactComponent', () => {
  let component: UsercontactComponent;
  let fixture: ComponentFixture<UsercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
