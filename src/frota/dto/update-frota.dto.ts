import { PartialType } from '@nestjs/mapped-types';
import { CreateFrotaDto } from './create-frota.dto';

export class UpdateFrotaDto extends PartialType(CreateFrotaDto) {}
