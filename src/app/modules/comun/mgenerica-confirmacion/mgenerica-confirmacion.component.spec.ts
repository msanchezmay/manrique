import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgenericaConfirmacionComponent } from './mgenerica-confirmacion.component';

describe('MgenericaConfirmacionComponent', () => {
  let component: MgenericaConfirmacionComponent;
  let fixture: ComponentFixture<MgenericaConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MgenericaConfirmacionComponent]
    });
    fixture = TestBed.createComponent(MgenericaConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
