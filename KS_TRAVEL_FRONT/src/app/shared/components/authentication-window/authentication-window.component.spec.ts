import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationWindowComponent } from './authentication-window.component';

describe('AuthenticationWindowComponent', () => {
  let component: AuthenticationWindowComponent;
  let fixture: ComponentFixture<AuthenticationWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
