import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibolanCalendarComponent } from './nibolan-calendar.component';

describe('NibolanCalendarComponent', () => {
  let component: NibolanCalendarComponent;
  let fixture: ComponentFixture<NibolanCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibolanCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibolanCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
