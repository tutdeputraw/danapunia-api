import { Test, TestingModule } from '@nestjs/testing';
import { PuniaController } from './punia.controller';
import { PuniaService } from '../service/punia.service';

describe('PuniaController', () => {
  let controller: PuniaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuniaController],
      providers: [PuniaService],
    }).compile();

    controller = module.get<PuniaController>(PuniaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
