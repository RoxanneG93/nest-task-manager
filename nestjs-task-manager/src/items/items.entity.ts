import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
// These orm decorators specify the data types of our objects 
// for our database structure
@Entity()
export class Item extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    price:number;

    @Column()
    description: String;

}