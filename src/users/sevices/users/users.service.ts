import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeOrm/posts';
import { Profile } from 'src/typeOrm/profile';
import { User } from 'src/typeOrm/user';
import { CreateUserParams, CreateUserPostParams, CreateUserProfileParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(User) private userRepositry:Repository<User>,
    @InjectRepository(Profile) private profileRepositry:Repository<Profile>,
   @InjectRepository(Profile) private postRepository:Repository<Post>,
    ){}
    findUsers(){  
      return this.userRepositry.find({relations:['profile']})
    }
    createUsers(userDetails:CreateUserParams){
        const newUser= this.userRepositry.create({...userDetails,creatAr:new Date()})
      return  this.userRepositry.save(newUser)
    }
     updateUser(id:number,updateUserDetails:UpdateUserParams){
     return this.userRepositry.update({id},{...updateUserDetails})
    }
    
   deleteUsers(id:number){
    return   this.userRepositry.delete({id})
    }

    async createUserProfile(id:number,userProfileDetails:CreateUserProfileParams){
      const user=await this.userRepositry.findOneBy({id})
      if (!user) throw new HttpException ('user not found ,You cannot create profile',HttpStatus.BAD_REQUEST)
     //return this.userRepositry.create({id},{...userProfileDetails})
    const newProfile=this.profileRepositry.create(userProfileDetails)
    const saveProfile= await this.profileRepositry.save(newProfile) 
    user.profile=saveProfile
    return this.userRepositry.save(user)
    }

   async createUserPost(
    id: number,
    createUserPostDetails: CreateUserPostParams,
  ) {
    const user = await this.userRepositry.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    const newPost = this.postRepository.create({
      ...createUserPostDetails,
      user,
    });
    return this.postRepository.save(newPost);
  }
}
