import { Module } from '@nestjs/common';
import { FrotaService } from './frota.service';
import { FrotaController } from './frota.controller';

@Module({
  controllers: [FrotaController],
  providers: [FrotaService],
})
export class FrotaModule {}
