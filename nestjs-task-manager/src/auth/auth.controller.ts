import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ){}
    @Post('/register')
    register(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto): Promise<void>{
        return this.authService.register(authCredentialsDto)
    }
}
