import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibolanHeaderComponent } from './nibolan-header.component';

describe('NibolanHeaderComponent', () => {
  let component: NibolanHeaderComponent;
  let fixture: ComponentFixture<NibolanHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibolanHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibolanHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
