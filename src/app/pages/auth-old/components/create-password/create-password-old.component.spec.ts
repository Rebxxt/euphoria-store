import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePasswordOldComponent } from './create-password-old.component';

describe('CreatePasswordComponent', () => {
  let component: CreatePasswordOldComponent;
  let fixture: ComponentFixture<CreatePasswordOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePasswordOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePasswordOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
