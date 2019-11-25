import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import {ItemRepository} from './items.repository';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ItemRepository])],
  providers: [ItemsService, ItemsResolver]
})
export class ItemsModule {}
