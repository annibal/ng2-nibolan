import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibolanThingTwoComponent } from './nibolan-thing-two.component';

describe('NibolanThingTwoComponent', () => {
  let component: NibolanThingTwoComponent;
  let fixture: ComponentFixture<NibolanThingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibolanThingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibolanThingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
