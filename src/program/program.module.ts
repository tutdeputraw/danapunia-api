import { Module } from '@nestjs/common';
import { ProgramController } from './controller/program.controller';
import { ProgramService } from './service/program.service';

@Module({
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule { }
