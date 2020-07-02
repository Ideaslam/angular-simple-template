import { TestBed } from '@angular/core/testing';

import { PersonlService } from './personl.service';

describe('PersonlService', () => {
  let service: PersonlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
