import { TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '@core/modules/angular-material/angular-material.module';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
    });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
