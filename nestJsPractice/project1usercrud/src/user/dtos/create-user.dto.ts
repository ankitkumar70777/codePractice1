import {
  IsString,
  IsInt,
  Length,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @MinLength(3, {
    message: 'name is too short',
  })
  @MaxLength(15, {
    message: 'name is too lengthy',
  })
  name: string;

  @IsInt()
  @Min(18)
  @Max(30)
  age: number;

  @IsString()
  @Length(2, 50)
  @IsEmail()
  email: string;

  @IsString()
  @Length(2, 12)
  location: string;
}
