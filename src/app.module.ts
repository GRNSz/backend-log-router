import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { DataSource } from 'typeorm';
import { FrotaModule } from './frota/frota.module';

@Module({

  imports: 
    [UsersModule,
    FrotaModule,
    
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'logrouterdb',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
    retryAttempts: 3,
    retryDelay: 3000,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}


