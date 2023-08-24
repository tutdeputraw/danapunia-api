import { PartialType } from '@nestjs/mapped-types';
import { CreatePuniaDto } from './create-punia.dto';

export class UpdatePuniaDto extends PartialType(CreatePuniaDto) {}
