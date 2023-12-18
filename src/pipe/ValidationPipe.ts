import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    //获取req参数
    const transData = plainToClass(metadata.metatype, value);
    //验证参数
    const result = await validate(transData);
    if (result.length > 0) {
      throw new HttpException(result, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
