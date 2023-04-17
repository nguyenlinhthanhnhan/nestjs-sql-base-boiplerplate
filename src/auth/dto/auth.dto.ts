import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    description: 'The username of the user (a.k.a login account)',
    example: 'admin',
  })
  @IsNotEmpty()
  @MaxLength(50)
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'YourSecretPassword',
  })
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(6)
  password: string;
}
