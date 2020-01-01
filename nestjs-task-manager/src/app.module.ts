import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ItemsModule } from './items/items.module';
import { BuildingsModule } from './buildings/buildings.module';
import { RoomsModule } from './rooms/rooms.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql';
import {graphqlConfig} from './config/graphql.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TasksModule,
    ItemsModule, AuthModule,
    BuildingsModule,
    RoomsModule,
  ],
})
export class AppModule {}
