import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './sevices/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeOrm/user';
import { Profile } from 'src/typeOrm/profile';
import { Post } from 'src/typeOrm/posts';

@Module({
  imports:[TypeOrmModule.forFeature([User,Profile,Post])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
