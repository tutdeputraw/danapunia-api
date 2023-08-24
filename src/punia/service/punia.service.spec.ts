import { Test, TestingModule } from '@nestjs/testing';
import { PuniaService } from './punia.service';

describe('PuniaService', () => {
  let service: PuniaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuniaService],
    }).compile();

    service = module.get<PuniaService>(PuniaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
