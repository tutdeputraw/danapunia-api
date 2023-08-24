import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePuraDto } from '../dto/create-pura.dto';
import { UpdatePuraDto } from '../dto/update-pura.dto';
import { PuraService } from '../service/pura.service';
import { Public } from 'src/auth/constants';

@Controller('pura')
@Public()
export class PuraController {
  constructor(private readonly puraService: PuraService) { }

  @Post()
  create(@Body() createPuraDto: CreatePuraDto) {
    return this.puraService.create(createPuraDto);
  }

  @Get()
  findAll() {
    return this.puraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.puraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuraDto: UpdatePuraDto) {
    return this.puraService.update(+id, updatePuraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puraService.remove(+id);
  }
}
