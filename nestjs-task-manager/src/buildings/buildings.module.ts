import { Module } from '@nestjs/common';
import { BuildingResolver } from './buildings.resolver';
import {Building} from './buildings.entity';
import {BuildingRepository} from './buildings.repository';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Building, BuildingRepository])],
  providers: [BuildingResolver],
})
export class BuildingsModule {}
