import {
  IsString,
  IsEmail,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  Min,
  Matches,
  isNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(40)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  @Matches(/^(?=.{8,64}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).*$/, {
    message:
      'Password must be 8-64 characters, include at least one uppercase letter, one lowercase letter, one number and one special character, and contain no spaces.',
  })
  password: string;

  @IsNumber()
  @IsOptional()
  @Min(18)
  age?: number;
}

export class CreateUserQueryDto {
  @Type(() => Number)
  @IsNumber()
  limit: number;

  // Number is js type not ts, remember
  @Type(() => Number)
  @IsNumber()
  page: number;
}
