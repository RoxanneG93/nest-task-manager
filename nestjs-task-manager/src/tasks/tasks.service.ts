import { Injectable, NotFoundException } from '@nestjs/common';
import {TaskStatus} from './task-status.enum';

import { CreateTaskDto } from './create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {Task} from './task.entity';

@Injectable()
export class TasksService {

    constructor(

        // On Initialization, 
        //we inject TaskRepository using InjectRepository decorator
        // and assigning it to private variable that will be available 
        // throughout the TaskService Class
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ){}


    async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>{
        return this.taskRepository.getTasks(filterDto);
    }


    // ** Any async method has to return as Promise type 
    // or else typescript will complain
    async getTaskById(id: number) :Promise<Task>{
        // find One method from the typeOrm repository class
        const found = await this.taskRepository.findOne(id);

        if(!found){
            // will get thrown and caught by best js creating a new http response
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        //padding the createTaskDto to the repository method and returning
        return this.taskRepository.createTask(createTaskDto);
    }

    
    async deleteTaskById(id: number): Promise<void>{
        //using repo method delete, since we know the condition here, id has to match item
        const result = await this.taskRepository.delete(id);
        console.log(result);
        if(result.affected === 0){
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

    async updateTaskStatus(id: number, status: TaskStatus):Promise<Task>{
        const task = await this.getTaskById(id);
        task.status = status;
        //where does this save method come from? the Entity?
        await task.save();
        return task;
    }


}
