import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import {Timestamps} from './timestamp.entity';
import {applyMixins} from '../helpers';
import {CreatedBy} from './createdBy.entity';
import {CreatedBy_Class} from './mixinClasses/createdBy';
import {Timestamps_Class} from './mixinClasses/timestamp';

// this approach errors out if there are items in db that were saved without same schema columns...?
// export interface Item extends CreatedBy_Class, Timestamps_Class {}

// These orm decorators specify the data types of our objects
// for our database structure
@Entity()
// export class Item implements CreatedBy_Class, Timestamps_Class {
export class Item  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: String;

    // @Column()
    // modifiedBy: number;

    // @Column()
    // createdBy: number;

    // @Column()
    // createAt: Date;

    // @Column()
    // updatedAt: Date;

}

// export interface Item extends CreatedBy, Timestamps {}

// this approach errors out if there are items in db that were saved without same schema columns...?
// export interface Item extends CreatedBy_Class, Timestamps_Class {}

// applyMixins(Item, [CreatedBy, Timestamps]);

// applyMixins(Item, [CreatedBy_Class, Timestamps_Class]);
