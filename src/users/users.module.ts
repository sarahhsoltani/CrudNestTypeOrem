import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './sevices/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeOrm/user';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
