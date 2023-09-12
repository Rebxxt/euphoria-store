import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationOldComponent } from './verification-old.component';

describe('VerificationComponent', () => {
  let component: VerificationOldComponent;
  let fixture: ComponentFixture<VerificationOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
