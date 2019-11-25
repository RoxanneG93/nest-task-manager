import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ItemsModule } from './items/items.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeorm.config'
import { GraphQLModule } from '@nestjs/graphql';
import {graphqlConfig} from './config/graphql.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    TasksModule, 
    ItemsModule
  ],
})
export class AppModule {}
