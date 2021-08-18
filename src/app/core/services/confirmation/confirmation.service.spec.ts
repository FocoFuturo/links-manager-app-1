import { TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';
import { ConfirmationService } from './confirmation.service';

describe('ConfirmationService', () => {
  let service: ConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
    });
    service = TestBed.inject(ConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
