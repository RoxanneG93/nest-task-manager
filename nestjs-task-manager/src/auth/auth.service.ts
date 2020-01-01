import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    register(authCredentialsDto: AuthCredentialsDto):Promise<void>{
        return this.userRepository.register(authCredentialsDto);
    }
}
