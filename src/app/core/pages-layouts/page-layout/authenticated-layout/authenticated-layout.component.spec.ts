import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';

import { AuthenticatedLayoutComponent } from './authenticated-layout.component';

describe('AuthenticatedLayoutComponent', () => {
  let component: AuthenticatedLayoutComponent;
  let fixture: ComponentFixture<AuthenticatedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticatedLayoutComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
