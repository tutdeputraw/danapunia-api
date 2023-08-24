import { Test, TestingModule } from '@nestjs/testing';
import { PuraController } from './pura.controller';
import { PuraService } from '../service/pura.service';

describe('PuraController', () => {
  let controller: PuraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuraController],
      providers: [PuraService],
    }).compile();

    controller = module.get<PuraController>(PuraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
