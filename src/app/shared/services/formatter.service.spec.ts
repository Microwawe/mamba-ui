/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormatterService } from './formatter.service';

describe('Service: Formatter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatterService]
    });
  });

  it('should ...', inject([FormatterService], (service: FormatterService) => {
    expect(service).toBeTruthy();
  }));
});
