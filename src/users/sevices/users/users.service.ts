import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeOrm/user';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(User) private userRepositry:Repository<User>,
    ){}
    findUsers(){  

    }
    createUsers(userDetails:CreateUserParams){
        const newUser=this.userRepositry.create({...userDetails,creatAr:new Date()})
      return  this.userRepositry.save(newUser)
    }

    
}
