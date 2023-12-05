import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserAppRoleComponent } from './list-user-app-role.component';

describe('ListUserAppRoleComponent', () => {
  let component: ListUserAppRoleComponent;
  let fixture: ComponentFixture<ListUserAppRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserAppRoleComponent]
    });
    fixture = TestBed.createComponent(ListUserAppRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
