import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/cadastrodeusuario')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/listadeusuarios')
  findAll(@Req() request: Request): string {
    return this.usersService.findAll();
  }

  @Get('/listadeusuarios/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('/listadeusuarios/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/listadeusuarios/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
