import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'The username of the user (a.k.a login account)',
    example: 'admin',
  })
  @IsNotEmpty()
  @MaxLength(50)
  username: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'YourSecretPassword',
  })
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(6)
  password: string;
  refreshToken: string;

  @ApiProperty({
    description: 'The phone numbers of the user',
    example: ['0123456789', '0987654321'],
  })
  phoneNumber: string[];
}
