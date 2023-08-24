import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramProgressService } from '../service/program-progress.service';
import { CreateProgramProgressDto } from '../dto/create-program-progress.dto';
import { UpdateProgramProgressDto } from '../dto/update-program-progress.dto';

@Controller('program-progress')
export class ProgramProgressController {
  constructor(private readonly programProgressService: ProgramProgressService) { }

  @Post()
  create(@Body() createProgramProgressDto: CreateProgramProgressDto) {
    return this.programProgressService.create(createProgramProgressDto);
  }

  @Get()
  findAll() {
    return this.programProgressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programProgressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramProgressDto: UpdateProgramProgressDto) {
    return this.programProgressService.update(+id, updateProgramProgressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programProgressService.remove(+id);
  }
}
