import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const { name, age } = createUserDto;
    return `新增用户的名字为:${name},年龄为：${age}岁`;
  }

  findAll() {
    return `返回所有用户信息`;
  }

  findOne(id: number) {
    return `返回ID为${id}的用户`;
  }

  update(updateUserDto: UpdateUserDto) {
    const { name, age } = updateUserDto;
    return `修改 ${name}的年龄为：${age}岁`;
  }

  remove(id: number) {
    return `删除Id为：${id} 的用户`;
  }
}
