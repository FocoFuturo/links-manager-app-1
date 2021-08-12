import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';

import { NonAuthenticatedLayoutComponent } from './non-authenticated-layout.component';

describe('NonAuthenticatedLayoutComponent', () => {
  let component: NonAuthenticatedLayoutComponent;
  let fixture: ComponentFixture<NonAuthenticatedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonAuthenticatedLayoutComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAuthenticatedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
