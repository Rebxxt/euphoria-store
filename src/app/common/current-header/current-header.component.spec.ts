import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHeaderComponent } from './current-header.component';

describe('CurrentHeaderComponent', () => {
  let component: CurrentHeaderComponent;
  let fixture: ComponentFixture<CurrentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
