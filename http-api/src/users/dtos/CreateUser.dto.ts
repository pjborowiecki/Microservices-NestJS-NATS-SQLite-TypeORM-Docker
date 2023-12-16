import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(64)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  username: string;

  @IsString()
  @IsOptional()
  @MaxLength(32)
  displayName?: string;
}
