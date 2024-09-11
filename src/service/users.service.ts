import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from 'src/entity/users.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserRoleDto } from 'src/dto/update-user-role.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
      role: createUserDto.role as UserRole,
    });
    return this.userRepository.save(newUser);
  }

  async updateRole(
    id: number,
    updateUserRoleDto: UpdateUserRoleDto,
  ): Promise<void> {
    const role = updateUserRoleDto.role as UserRole;
    await this.userRepository.update(id, { role });
  }
}
