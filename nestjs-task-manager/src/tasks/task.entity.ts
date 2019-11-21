import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { TaskStatus } from './task-status.enum';

// These orm decorators specify the data types of our objects 
// for our database structure
@Entity()
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    status: TaskStatus;

}

