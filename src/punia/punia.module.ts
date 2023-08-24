import { Module } from '@nestjs/common';
import { PuniaController } from './controller/punia.controller';
import { PuniaService } from './service/punia.service';

@Module({
  controllers: [PuniaController],
  providers: [PuniaService],
})
export class PuniaModule { }
