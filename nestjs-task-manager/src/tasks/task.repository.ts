import { Repository, EntityRepository } from "typeorm";
import {Task} from './task.entity';
import {CreateTaskDto} from './create-task.dto';
import {TaskStatus} from './task-status.enum';

// May provide higher order functions for the database
@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{

    // we can define custome methods withing the repository
    async createTask(createTaskDto: CreateTaskDto):Promise<Task> {
        const {title, description} = createTaskDto;
        const task = new Task();
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        await task.save()
        return task;
    }
}