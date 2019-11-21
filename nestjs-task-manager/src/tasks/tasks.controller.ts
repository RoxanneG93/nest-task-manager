import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
//import {Task, TaskStatus} from './task.model';
import { CreateTaskDto } from './create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import {Task} from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterDto): Task[]{
    //     console.log(filterDto);
    //     if(Object.keys(filterDto).length){
    //         return this.tasksService.getTasksWithFilters(filterDto); 
    //     } else {
    //       return this.tasksService.getAllTasks();  
    //     }
        
    // }
    // @Get()
    // getAllTasks(): Task[] {
    //     return this.tasksService.getAllTasks();
    // }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number):Promise<Task>{
        return this.tasksService.getTaskById(id)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
       return this.tasksService.createTask(createTaskDto)
        
    }

    @Delete('/:id')
    async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void>{
        return this.tasksService.deleteTaskById(id);
    }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string, 
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus
    // ): Task{
    //     return this.tasksService.updateTaskStatus(id, status)
    // }
}
