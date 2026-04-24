import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTeste(): string {
    return 'O servidor está funcionando corretamente!';
  }

  getUsuarios(): string {
    return '...';
  }

}
