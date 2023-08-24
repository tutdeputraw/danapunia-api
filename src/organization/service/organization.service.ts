import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { OrganizationRepository } from '../repository/organization.repository';

@Injectable()
export class OrganizationService {
  constructor(private organizationRepository: OrganizationRepository) { }

  create(createOrganizationDto: CreateOrganizationDto) {
    return this.organizationRepository.createOrganization(createOrganizationDto);
  }

  findAll() {
    return this.organizationRepository.getOrganizations({});
  }

  findOne(id: number) {
    return this.organizationRepository.getOrganization({ id });
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationRepository.updateOrganization({
      data: updateOrganizationDto,
      where: { id }
    });
  }

  remove(id: number) {
    return this.organizationRepository.deleteOrganization({ id });
  }
}
