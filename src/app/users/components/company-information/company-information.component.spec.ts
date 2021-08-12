import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';

import { CompanyInformationComponent } from './company-information.component';

describe('CompanyInformationComponent', () => {
  let component: CompanyInformationComponent;
  let fixture: ComponentFixture<CompanyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyInformationComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
