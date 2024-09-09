// users.controller.ts
import { Controller, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id/role')
  async updateRole(@Param('id') id: number, @Body('role') role: string) {
    return this.usersService.updateRole(id, role);
  }
}
