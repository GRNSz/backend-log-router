import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/teste')
  getTeste(): string {
    return this.appService.getTeste();
  }

  @Get('/')
  getIsOk(): string {
    return this.appService.getIsOk();
  }
  
}
