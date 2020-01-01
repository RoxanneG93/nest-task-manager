import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Lazy } from '../helpers';

import { Room} from '../rooms/rooms.entity';

@Entity({
    name: 'buildings',
})
export class Building  {

    @PrimaryGeneratedColumn({
        name: 'building_no',
    })
    number: number;

    @Column({
        name: 'building_name',
    })
    name: string;

    @Column({
        name: 'address',
    })
    address: string;

    // oneToMany here
    @OneToMany(type => Room, rooms => rooms.building, {
        lazy: true,
        nullable: true,
        cascade: true,
    })
    // @JoinColumn({
    //     name: 'building_no',
    //     referencedColumnName: 'building_no',
    // })
    @Field(type => [Room], {nullable: true})
    rooms: Lazy<Room[]>;

}
