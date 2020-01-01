import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
} from 'typeorm';
// These orm decorators specify the data types of our objects
// for our database structure

@Entity()
export class Timestamps {
    @PrimaryColumn({
        name: 'created_utc',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @Column({
        name: 'modified_utc',
        default: null,
    })
    updatedAt: Date;

}
