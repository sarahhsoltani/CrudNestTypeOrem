import { Controller ,Get, Post, Put,Delete,Param, ParseIntPipe} from '@nestjs/common';
import { UsersService } from 'src/users/sevices/users/users.service';
import { CreateUserDto } from 'src/users/dto/createUsers.dto';
import { Body } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/updateUser.dto.';
import { CreateUserProfile } from 'src/users/dto/createUserProfile.dto';
import { CreateUserPostDto} from 'src/users/dto/createUserPost.dto';
@Controller('users')
export class UsersController {
constructor(private  userService :UsersService){}
@Get()
getUsers(){
    return this.userService.findUsers()
}
@Post()
createUsers(@Body() createUserDto:CreateUserDto){
return this.userService.createUsers(createUserDto)
}
@Put(':id')
updateUserById(@Param('id',ParseIntPipe) id :number,
@Body() updateUserDto:UpdateUserDto
){
return this.userService.updateUser(id,updateUserDto)
}
@Delete(':id')
deleteUser(@Param('id',ParseIntPipe) id :number){
return this.userService.deleteUsers(id)
}
@Post(':id/profiles')
createUserProfile(@Param('id',ParseIntPipe) id :number,@Body() createUserProfile:CreateUserProfile){
return this.userService.createUserProfile(id,createUserProfile)
}

  @Post(':id/posts')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.userService.createUserPost(id, createUserPostDto);
  }
}
 