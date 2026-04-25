import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FrotaService } from './frota.service';
import { CreateFrotaDto } from './dto/create-frota.dto';
import { UpdateFrotaDto } from './dto/update-frota.dto';

@Controller('frota')
export class FrotaController {
  constructor(private readonly frotaService: FrotaService) {}

  @Post()
  create(@Body() createFrotaDto: CreateFrotaDto) {
    return this.frotaService.create(createFrotaDto);
  }

  @Get()
  findAll() {
    return this.frotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frotaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrotaDto: UpdateFrotaDto) {
    return this.frotaService.update(+id, updateFrotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frotaService.remove(+id);
  }
}
