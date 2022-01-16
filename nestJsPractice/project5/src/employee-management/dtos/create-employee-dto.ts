import {
  IsString,
  IsEmail,
  IsInt,
  MinLength,
  MaxLength,
  ValidateNested,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

export class CreateEmployeeDto {
  @MinLength(3, {
    message: '$property $value is too short, atleast $constraint1 excepted',
  })
  @MaxLength(15, {
    message: '$property $value is too large, atmost $constraint1 excepted',
  })
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(3, {
    message: '$property $value is too short, atleast $constraint1 excepted',
  })
  @MaxLength(12, {
    message: '$property $value is too large, atmost $constraint1 excepted',
  })
  @IsString()
  phone: string;

  @IsInt()
  age: number;

  @MinLength(3, {
    message: '$property $value is too short, atleast $constraint1 excepted',
  })
  @MaxLength(15, {
    message: '$property $value is too large, atmost $constraint1 excepted',
  })
  @IsString()
  location: string;

  @IsArray()
  //   @ValidateNested({ each: true })
  @MinLength(3, {
    each: true,
    message: '$property $value is too short, atleast $constraint1 excepted',
  })
  @MaxLength(15, {
    each: true,
    message: '$property $value is too large, atmost $constraint1 excepted',
  })
  hobbies: string[];
}
//other :
//  @IsNotEmpty()
//@IsDefined(value: any)	Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.
///
/*
Common validation decorators	
@IsDefined(value: any)	Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.
@IsOptional()	Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.
@Equals(comparison: any)	Checks if value equals ("===") comparison.
@NotEquals(comparison: any)	Checks if value not equal ("!==") comparison.
@IsEmpty()	Checks if given value is empty (=== '', === null, === undefined).
@IsNotEmpty()	Checks if given value is not empty (!== '', !== null, !== undefined).
@IsIn(values: any[])	Checks if value is in a array of allowed values.
@IsNotIn(values: any[])	Checks if value is not in a array of disallowed values.

Type validation decorators	
@IsBoolean()	Checks if a value is a boolean.
@IsDate()	Checks if the value is a date.
@IsString()	Checks if the string is a string.
@IsNumber(options: IsNumberOptions)	Checks if the value is a number.
@IsInt()	Checks if the value is an integer number.
@IsArray()	Checks if the value is an array
@IsEnum(entity: object)	Checks if the value is an valid enum

@Min(min: number)	Checks if the given number is greater than or equal to given number.
@Max(max: number)	Checks if the given number is less than or equal to given number.

Date validation decorators	
@MinDate(date: Date)	Checks if the value is a date that's after the specified date.
@MaxDate(date: Date)	Checks if the value is a date that's before the specified date.

String validation decorators	
@Contains(seed: string)	Checks if the string contains the seed.
@NotContains(seed: string)	Checks if the string not contains the seed.
@IsAlpha()	Checks if the string contains only letters (a-zA-Z).
@IsAlphanumeric()	Checks if the string contains only letters and numbers.

@IsEmail(options?: IsEmailOptions)	Checks if the string is an email.
@IsFQDN(options?: IsFQDNOptions)	Checks if the string is a fully qualified domain name (e.g. domain.com).

@IsIP(version?: "4"|"6")	Checks if the string is an IP (version 4 or 6).
@IsPort()	Checks if the string is a valid port number.
@IsISBN(version?: "10"|"13")	Checks if the string is an ISBN (version 10 or 13).

@IsJSON()	Checks if the string is valid JSON.
@IsObject()	Checks if the object is valid Object (null, functions, arrays will return false).

@IsNotEmptyObject()	Checks if the object is not empty.
@IsLowercase()	Checks if the string is lowercase.

@IsUppercase()	Checks if the string is uppercase.
@Length(min: number, max?: number)	Checks if the string's length falls in a range.

@MinLength(min: number)	Checks if the string's length is not less than given number.
@MaxLength(max: number)	Checks if the string's length is not more than given number.

@Matches(pattern: RegExp, modifiers?: string)	Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').

Array validation decorators	
@ArrayContains(values: any[])	Checks if array contains all values from the given array of values.
@ArrayNotContains(values: any[])	Checks if array does not contain any of the given values.
@ArrayNotEmpty()	Checks if given array is not empty.
@ArrayMinSize(min: number)	Checks if the array's length is greater than or equal to the specified number.
@ArrayMaxSize(max: number)	Checks if the array's length is less or equal to the specified number.
@ArrayUnique(identifier?: (o) => any)	Checks if all array's values are unique. Comparison for objects is reference-based. Optional function can be speciefied which return value will be used for the comparsion.
Object validation decorators	
@IsInstance(value: any)	Checks if the property is an instance of the passed value.
 */
