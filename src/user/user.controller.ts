import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  /**
   * 查询所有用户
   * @returns
   */
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  /**
   * 根据id查询用户
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  /**
   * 新增用户
   * @param createUserDto
   * @returns
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * 修改用户信息
   * @param id
   * @param updateUserDto
   * @returns
   */
  @Put()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  /**
   * 根据Id删除用户
   * @param id
   * @returns
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
