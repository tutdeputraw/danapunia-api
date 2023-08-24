import { Test, TestingModule } from '@nestjs/testing';
import { ProgramProgressController } from './program-progress.controller';
import { ProgramProgressService } from '../service/program-progress.service';

describe('ProgramProgressController', () => {
  let controller: ProgramProgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramProgressController],
      providers: [ProgramProgressService],
    }).compile();

    controller = module.get<ProgramProgressController>(ProgramProgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
