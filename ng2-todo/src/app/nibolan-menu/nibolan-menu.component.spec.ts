import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibolanMenuComponent } from './nibolan-menu.component';

describe('NibolanMenuComponent', () => {
  let component: NibolanMenuComponent;
  let fixture: ComponentFixture<NibolanMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibolanMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibolanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
