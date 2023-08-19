import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationAdminAuthController } from './organization-admin.controller';

describe('OrganizationAdminController', () => {
  let controller: OrganizationAdminAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationAdminAuthController],
    }).compile();

    controller = module.get<OrganizationAdminAuthController>(OrganizationAdminAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
