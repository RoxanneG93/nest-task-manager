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
// @Entity()
export class CreatedBy_Class  {
    // @PrimaryColumn({
    //     name: 'created_by_userId',
    //     default: 1,
    // })

    createdBy: number;

    // @Column({
    //     name: 'modified_by_userId',
    //     default: 2,
    // })
    modifiedBy: number;
}
