import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeOrm/user';
import { UsersModule } from './users/users.module';
import { Profile } from './typeOrm/profile';
import { Post} from './typeOrm/posts';
@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: 'admin',
      database: 'crudNest',
      entities: [User,Profile,Post],
      synchronize: true, 
    }),
     UsersModule,
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
