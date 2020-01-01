import { Module } from '@nestjs/common';
import { RoomResolver } from './rooms.resolver';
import {Room} from './rooms.entity';
import {RoomRepository} from './rooms.repository';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Room, RoomRepository])],
  providers: [RoomResolver],
})
export class RoomsModule {}
