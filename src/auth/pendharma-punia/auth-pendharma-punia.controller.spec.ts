import { Test, TestingModule } from '@nestjs/testing';
import { PendharmaPuniaAuthController } from './auth-pendharma-punia.controller';

describe('PendharmaPuniaController', () => {
  let controller: PendharmaPuniaAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendharmaPuniaAuthController],
    }).compile();

    controller = module.get<PendharmaPuniaAuthController>(PendharmaPuniaAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
