import { TestBed } from '@angular/core/testing';

import { OrderIdService } from './order-id.service';

describe('OrderIdService', () => {
  let service: OrderIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
