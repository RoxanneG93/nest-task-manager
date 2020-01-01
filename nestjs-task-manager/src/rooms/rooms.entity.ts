import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Lazy } from '../helpers';

import { Building } from '../buildings/buildings.entity';

@Entity({
    name: 'rooms',
})
export class Room  {

    @PrimaryGeneratedColumn({
        name: 'room_no',
    })
    number: number;

    @Column({
        name: 'room_name',
    })
    name: string;

    // manyToOne here
    @ManyToOne(type => Building, buildings => buildings.rooms, {
        onDelete: 'CASCADE',
        lazy: true,
        nullable: true,
    })
    @JoinColumn({
        name: 'building_no',
        // referencedColumnName: 'building_no',
    })
    @Field(type => Building, {nullable: true})
    building: Lazy<Building>;

}
