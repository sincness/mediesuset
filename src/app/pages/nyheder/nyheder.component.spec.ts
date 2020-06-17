import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyhederComponent } from './nyheder.component';

describe('NyhederComponent', () => {
  let component: NyhederComponent;
  let fixture: ComponentFixture<NyhederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyhederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyhederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
