import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';

import { UsersLinksPageComponent } from './users-links-page.component';

describe('UsersLinksPageComponent', () => {
  let component: UsersLinksPageComponent;
  let fixture: ComponentFixture<UsersLinksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLinksPageComponent ],
      imports: [RouterTestingModule, AngularMaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
