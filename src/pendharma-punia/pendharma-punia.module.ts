import { Module } from '@nestjs/common';
import { PendharmaPuniaRepository } from './pendharma-punia.repository';

@Module({
  providers: [PendharmaPuniaRepository],
  exports: [PendharmaPuniaRepository]
})
export class PendharmaPuniaModule { }
