import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserRepository} from '../user/user.repository';

@Module({
  //allows you to inject the imported repository
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
