import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationAdminAuthService } from './organization-admin.service';

describe('OrganizationAdminService', () => {
  let service: OrganizationAdminAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationAdminAuthService],
    }).compile();

    service = module.get<OrganizationAdminAuthService>(OrganizationAdminAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
