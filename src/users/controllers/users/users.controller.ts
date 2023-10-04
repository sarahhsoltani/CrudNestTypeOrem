import { Controller ,Get, Post} from '@nestjs/common';
import { UsersService } from 'src/users/sevices/users/users.service';
import { CreateUserDto } from 'src/users/dto/createUsers.dto';
import { Body } from '@nestjs/common';
@Controller('users')
export class UsersController {
constructor(private  userService :UsersService){}
@Get()
getUsers(){

}
@Post()
createUsers(@Body() createUserDto:CreateUserDto){
this.userService.createUsers(createUserDto)
}
}
 