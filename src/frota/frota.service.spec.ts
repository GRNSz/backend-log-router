import { Test, TestingModule } from '@nestjs/testing';
import { FrotaService } from './frota.service';

describe('FrotaService', () => {
  let service: FrotaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrotaService],
    }).compile();

    service = module.get<FrotaService>(FrotaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
