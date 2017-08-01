import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibolanUserProfileComponent } from './nibolan-user-profile.component';

describe('NibolanUserProfileComponent', () => {
  let component: NibolanUserProfileComponent;
  let fixture: ComponentFixture<NibolanUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibolanUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibolanUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
