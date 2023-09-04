import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationAdminController } from './organization-admin.controller';

describe('OrganizationAdminController', () => {
  let controller: OrganizationAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationAdminController],
    }).compile();

    controller = module.get<OrganizationAdminController>(OrganizationAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
