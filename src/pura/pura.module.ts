import { Module } from '@nestjs/common';
import { PuraController } from './controller/pura.controller';
import { PuraService } from './service/pura.service';
import { PuraRepository } from './repository/pura.repository';

@Module({
  controllers: [PuraController],
  providers: [PuraService, PuraRepository],
})
export class PuraModule { }
