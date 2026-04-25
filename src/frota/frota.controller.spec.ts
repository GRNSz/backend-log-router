import { Test, TestingModule } from '@nestjs/testing';
import { FrotaController } from './frota.controller';
import { FrotaService } from './frota.service';

describe('FrotaController', () => {
  let controller: FrotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrotaController],
      providers: [FrotaService],
    }).compile();

    controller = module.get<FrotaController>(FrotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
