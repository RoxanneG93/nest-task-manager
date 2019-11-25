import { Repository, EntityRepository } from "typeorm";
import {Task} from './task.entity';
import {CreateTaskDto} from './create-task.dto';
import {TaskStatus} from './task-status.enum';
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

// May provide higher order functions for the database
@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{

    async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>{
        const {status, search} = filterDto;
        //query builder -- where does it come from? repository?
        const query = this.createQueryBuilder('task');

        if(status){
            // Magical!!!
            // !IMPORTANT --- when you use where you override any other where methods also run,
            // andWhere works with each other.
            query.andWhere('task.status = :status', {status})
        }

        if(search){
            // LIKE, similar to == but forgives some white spaces
            query.andWhere('task.title LIKE :search OR task.description LIKE :search', {search: `%${search}`});
        }
        const tasks = await query.getMany();
        return tasks;
    }

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