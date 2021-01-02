/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('Service: Modal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService]
    });
  });

  it('should ...', inject([ModalService], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));
});
