import { Module } from '@nestjs/common';
import { PendharmaPuniaRepository } from './repository/pendharma-punia.repository';
import { PendharmaPuniaController } from './controller/pendharma-punia.controller';
import { PendharmaPuniaService } from './service/pendharma-punia.service';

@Module({
  providers: [PendharmaPuniaRepository, PendharmaPuniaService],
  exports: [PendharmaPuniaRepository],
  controllers: [PendharmaPuniaController]
})
export class PendharmaPuniaModule { }
