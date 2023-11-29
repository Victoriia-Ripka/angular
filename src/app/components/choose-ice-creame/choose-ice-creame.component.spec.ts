import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseIceCreameComponent } from './choose-ice-creame.component';

describe('ChooseIceCreameComponent', () => {
  let component: ChooseIceCreameComponent;
  let fixture: ComponentFixture<ChooseIceCreameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseIceCreameComponent]
    });
    fixture = TestBed.createComponent(ChooseIceCreameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
