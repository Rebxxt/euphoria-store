import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEmailOldComponent } from './check-email-old.component';

describe('CheckEmailComponent', () => {
  let component: CheckEmailOldComponent;
  let fixture: ComponentFixture<CheckEmailOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckEmailOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckEmailOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
