import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UserIdRequestParamsDto } from '../dtos/users.dto';
import { UserDto } from '../dtos/users.dto';
import { UsersService } from '../services/users.service';

const uuidv4 = require('uuid/v4');

@Controller('users')
@ApiUseTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /* Create User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Create User' })
  @ApiResponse({ status: 200, description: 'Create User.' })
  @Post()
  async createUser(@Body() userDto: UserDto): Promise<UserDto> {
    //const userId = uuidv4();
    const userId = 1234;
    return this.usersService.createUser({...{userId}, ...userDto});
  }

  /* Update User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Update User' })
  @ApiResponse({ status: 200, description: 'Update User.' })
  @Put(':userId')
  async updateUser(@Param() userId: UserIdRequestParamsDto, @Body() userDto: UserDto) {
    return this.usersService.updateUser({...userId, ...userDto});
  }

  /* Delete User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Delete User' })
  @ApiResponse({ status: 200, description: 'Delete User.' })
  @Delete(':userId')
  async deleteUser(@Param() userId: UserIdRequestParamsDto) {
    return this.usersService.deleteUser(userId);
  }

  /* TODO: List Users */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'List Users' })
  @ApiResponse({ status: 200, description: 'List Users.' })
  @Get()
  async findUsers(@Param() param) {
    return this.usersService.findUsers();
  }

  /* TODO: Get User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Get User' })
  @ApiResponse({ status: 200, description: 'Get User.' })
  @Get(':userId')
  async getUser(@Param() userId: UserIdRequestParamsDto) {
    return this.usersService.getUser(userId);
  }
}
