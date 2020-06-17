import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitprogramComponent } from './mitprogram.component';

describe('MitprogramComponent', () => {
  let component: MitprogramComponent;
  let fixture: ComponentFixture<MitprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
