import { PartialType } from '@nestjs/mapped-types';
import { CreatePuraDto } from './create-pura.dto';

export class UpdatePuraDto extends PartialType(CreatePuraDto) {}
