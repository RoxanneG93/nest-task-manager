import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [TasksModule, ItemsModule],
})
export class AppModule {}
