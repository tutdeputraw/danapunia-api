import { Module } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
})
export class UsersModule { }
