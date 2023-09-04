import { Test, TestingModule } from '@nestjs/testing';
import { PendharmaPuniaController } from './pendharma-punia.controller';

describe('PendharmaPuniaController', () => {
  let controller: PendharmaPuniaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendharmaPuniaController],
    }).compile();

    controller = module.get<PendharmaPuniaController>(PendharmaPuniaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
