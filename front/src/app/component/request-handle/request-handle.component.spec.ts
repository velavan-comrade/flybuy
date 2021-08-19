import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHandleComponent } from './request-handle.component';

describe('RequestHandleComponent', () => {
  let component: RequestHandleComponent;
  let fixture: ComponentFixture<RequestHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestHandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
