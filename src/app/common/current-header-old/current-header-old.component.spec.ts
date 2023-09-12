import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHeaderOldComponent } from './current-header-old.component';

describe('CurrentHeaderComponent', () => {
  let component: CurrentHeaderOldComponent;
  let fixture: ComponentFixture<CurrentHeaderOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentHeaderOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentHeaderOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
