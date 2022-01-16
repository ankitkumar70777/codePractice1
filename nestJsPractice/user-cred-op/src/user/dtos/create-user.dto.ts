import {
  IsString,
  IsInt,
  Length,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsEmail,
  IsOptional,
  IsIn,
  IsNotEmpty,
} from 'class-validator';

//how to use array in fto

export class CreateUsersDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'name is too short',
  })
  @MaxLength(15, {
    message: 'name is too lengthy',
  })
  name: string;

  @IsNotEmpty()
  // @IsInt()
  // @Min(18)
  // @Max(30)
  age: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  @IsOptional() //make parameter optional
  location: string;

  // @IsIn(['swimming', 'cricket'])
  @IsOptional()
  @IsNotEmpty({ each: true })
  @MinLength(3, { each: true })
  @MaxLength(15, { each: true })
  hobbies: string[];
}
