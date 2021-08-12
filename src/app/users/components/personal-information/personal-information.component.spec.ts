import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';

import { PersonalInformationComponent } from './personal-information.component';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalInformationComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
