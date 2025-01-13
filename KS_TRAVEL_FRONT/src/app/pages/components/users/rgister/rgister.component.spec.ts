import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgisterComponent } from './rgister.component';

describe('RgisterComponent', () => {
  let component: RgisterComponent;
  let fixture: ComponentFixture<RgisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
