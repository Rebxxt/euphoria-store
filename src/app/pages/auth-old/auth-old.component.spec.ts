import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOldComponent } from './auth-old.component';

describe('AuthComponent', () => {
  let component: AuthOldComponent;
  let fixture: ComponentFixture<AuthOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
