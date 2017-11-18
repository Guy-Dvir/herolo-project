import { TestBed, inject } from '@angular/core/testing';

import { BookEditService } from './book-edit.service';

describe('BookEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookEditService]
    });
  });

  it('should be created', inject([BookEditService], (service: BookEditService) => {
    expect(service).toBeTruthy();
  }));
});
