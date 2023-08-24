import { Module } from '@nestjs/common';
import { ProgramProgressController } from './controller/program-progress.controller';
import { ProgramProgressService } from './service/program-progress.service';

@Module({
  controllers: [ProgramProgressController],
  providers: [ProgramProgressService],
})
export class ProgramProgressModule { }
