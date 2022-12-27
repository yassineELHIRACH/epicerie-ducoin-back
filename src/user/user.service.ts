import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './entities/user.entity';
import { encodePassword } from '../utils/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SerializedUser } from './entities/SerializedUser';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);

    const user = this.userRepository.create({
      ...createUserDto,
      password,
    });

    return await this.userRepository.save(user);
  }

  async getAllUsers() {
    const users = await this.userRepository.find();
    return users.map((user) => new SerializedUser(user));
  }

  async findOne(condition: any) {
    return this.userRepository.findOneBy(condition);
  }

  async updateUser(updateUserDto: UpdateUserDto, user: UserEntity) {
    const userId = user.id;
    delete user.id;
    const updateUser = {
      ...user,
      ...updateUserDto,
    };
    return await this.userRepository.update({ id: userId }, { ...updateUser });
  }
}
