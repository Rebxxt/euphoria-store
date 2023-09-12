import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassOldComponent } from './reset-pass-old.component';

describe('ResetPassComponent', () => {
  let component: ResetPassOldComponent;
  let fixture: ComponentFixture<ResetPassOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPassOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
