import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramProgressDto } from './create-program-progress.dto';

export class UpdateProgramProgressDto extends PartialType(CreateProgramProgressDto) {}
