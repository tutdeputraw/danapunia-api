import { Test, TestingModule } from '@nestjs/testing';
import { PuraService } from './pura.service';

describe('PuraService', () => {
  let service: PuraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuraService],
    }).compile();

    service = module.get<PuraService>(PuraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
