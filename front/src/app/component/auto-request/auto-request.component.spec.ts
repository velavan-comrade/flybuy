import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRequestComponent } from './auto-request.component';

describe('AutoRequestComponent', () => {
  let component: AutoRequestComponent;
  let fixture: ComponentFixture<AutoRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
