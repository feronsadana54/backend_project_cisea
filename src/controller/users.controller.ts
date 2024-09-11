import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserRoleDto } from 'src/dto/update-user-role.dto';
import { UsersService } from 'src/service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id/role')
  async updateRole(@Param('id') id: number, @Body() updateUserRoleDto: UpdateUserRoleDto) {
    return this.usersService.updateRole(id, updateUserRoleDto);
  }
}
