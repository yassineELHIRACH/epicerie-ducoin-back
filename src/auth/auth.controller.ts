import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Post,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';
import { SignInDto } from './dto/SignIn.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() signInDto: SignInDto) {
    const username = signInDto.username;
    const user = await this.usersService.findOne({ username });

    if (!user) {
      throw new UnauthorizedException('invalid credentials: !user');
    }

    if (!comparePassword(signInDto.password, user.password)) {
      throw new UnauthorizedException('invalid credentials: !password');
    }
    const payload = { username: signInDto.username, sub: user }
    const token = await this.jwtService.signAsync({
      id: user.id,
      username: user.username,
      role: user.role
    });

    return {
      massage: 'Login Succuss!',
      status: HttpStatus.CREATED,
      token: token,
    };
  }
}
