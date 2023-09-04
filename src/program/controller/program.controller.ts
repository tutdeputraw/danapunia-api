import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Req } from '@nestjs/common';
import { CreateProgramDto } from '../dto/create-program.dto';
import { UpdateProgramDto } from '../dto/update-program.dto';
import { ProgramService } from '../service/program.service';
import { log } from 'console';
import { UserService } from 'src/users/service/user.service';

@Controller('program')
export class ProgramController {
  constructor(
    private programService: ProgramService,
    private userService: UserService
  ) { }

  @Post()
  async create(@Req() req, @Body() createProgramDto: CreateProgramDto) {
    const organizationAdmin = req['user'];
    createProgramDto.organizationAdminId = organizationAdmin.organizationAdmin.id;
    createProgramDto.organizationId = organizationAdmin.organizationAdmin.Organization.id;
    return this.programService.create(createProgramDto);
  }

  @Get()
  findAll(@Req() req, @Query() query) {
    const organizationAdmin = req['user'];

    if (query.hasOwnProperty('uniqueOrganizationAdminId')) {
      return this.programService.findAllByOrganizationAdminId(organizationAdmin.organizationAdmin.id);
    }

    if (query.hasOwnProperty('organizationId')) {
      return this.programService.findAllByOrganizationId(Number(query.organizationId));
    }

    return this.programService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    return this.programService.update(+id, updateProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programService.remove(+id);
  }
}
