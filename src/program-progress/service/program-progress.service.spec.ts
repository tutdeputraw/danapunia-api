import { Test, TestingModule } from '@nestjs/testing';
import { ProgramProgressService } from './program-progress.service';

describe('ProgramProgressService', () => {
  let service: ProgramProgressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramProgressService],
    }).compile();

    service = module.get<ProgramProgressService>(ProgramProgressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
