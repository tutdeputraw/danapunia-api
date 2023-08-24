import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule { }
