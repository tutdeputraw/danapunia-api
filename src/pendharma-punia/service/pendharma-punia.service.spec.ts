import { Test, TestingModule } from '@nestjs/testing';
import { PendharmaPuniaService } from './pendharma-punia.service';

describe('PendharmaPuniaService', () => {
  let service: PendharmaPuniaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendharmaPuniaService],
    }).compile();

    service = module.get<PendharmaPuniaService>(PendharmaPuniaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
