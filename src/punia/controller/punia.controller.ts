import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePuniaDto } from '../dto/create-punia.dto';
import { UpdatePuniaDto } from '../dto/update-punia.dto';
import { PuniaService } from '../service/punia.service';

@Controller('punia')
export class PuniaController {
  constructor(private readonly puniaService: PuniaService) { }

  @Post()
  create(@Body() createPuniaDto: CreatePuniaDto) {
    return this.puniaService.create(createPuniaDto);
  }

  @Get()
  findAll() {
    return this.puniaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.puniaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuniaDto: UpdatePuniaDto) {
    return this.puniaService.update(+id, updatePuniaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puniaService.remove(+id);
  }
}
