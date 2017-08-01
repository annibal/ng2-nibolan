import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibolanThingOneComponent } from './nibolan-thing-one.component';

describe('NibolanThingOneComponent', () => {
  let component: NibolanThingOneComponent;
  let fixture: ComponentFixture<NibolanThingOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibolanThingOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibolanThingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
