import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../auth.service';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { AuthDto } from '../dto/auth.dto';
import { RefreshTokenGuard } from '../../shared/guards/refreshToken.guard';
import { AccessTokenGuard } from '../../shared/guards/accessToken.guard';

@ApiBearerAuth()
@ApiTags('auth')
@Controller({
  version: '1',
  path: 'auth',
})
export class AuthV1Controller {
  constructor(private readonly authService: AuthService) {
  }

  @Post('signup')
  @ApiOperation({
    summary: 'Sign up',
  })
  async signup(@Body() createUsersDto: CreateUserDto) {
    return await this.authService.signUp(createUsersDto);
  }

  @ApiOperation({
    summary: 'Sign in',
  })
  @Post('signin')
  async signin(@Body() authDto: AuthDto) {
    return await this.authService.signIn(authDto);
  }

  @ApiOperation({
    summary: 'Get refresh tokens',
  })
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @ApiOperation({
    summary: 'Logout',
  })
  @ApiOkResponse({
    description: 'Logged out',
  })
  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: Request) {
    return this.authService.logout(req.user['sub']);
  }
}
