import {PipeTransform, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
    // means it cannot be altered even during run time
    readonly allowedStatuses = [
            TaskStatus.OPEN,
            TaskStatus.IN_PROGRESS,
            TaskStatus.DONE
    ]


    transform(value: any, metadata: ArgumentMetadata){
       
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }

    private isStatusValid(status: any){
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}