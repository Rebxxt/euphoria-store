import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPicComponent } from './auth-pic.component';

describe('AuthPicComponent', () => {
  let component: AuthPicComponent;
  let fixture: ComponentFixture<AuthPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
