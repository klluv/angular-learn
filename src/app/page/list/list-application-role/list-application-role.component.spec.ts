import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplicationRoleComponent } from './list-application-role.component';

describe('ListApplicationRoleComponent', () => {
  let component: ListApplicationRoleComponent;
  let fixture: ComponentFixture<ListApplicationRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListApplicationRoleComponent]
    });
    fixture = TestBed.createComponent(ListApplicationRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
