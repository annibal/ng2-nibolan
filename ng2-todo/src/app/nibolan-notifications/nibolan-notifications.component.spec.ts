import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibolanNotificationsComponent } from './nibolan-notifications.component';

describe('NibolanNotificationsComponent', () => {
  let component: NibolanNotificationsComponent;
  let fixture: ComponentFixture<NibolanNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibolanNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibolanNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
