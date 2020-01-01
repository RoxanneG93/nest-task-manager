import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
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

    // before adding this the db already had current_timestamp as defaul in db
    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

