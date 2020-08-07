import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoudetailsComponent } from './boudetails.component';

describe('BoudetailsComponent', () => {
  let component: BoudetailsComponent;
  let fixture: ComponentFixture<BoudetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoudetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
