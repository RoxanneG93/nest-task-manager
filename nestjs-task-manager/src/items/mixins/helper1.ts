import { InputType, ClassType, Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
export default function withClasses<TClassType extends ClassType>(BaseClass: TClassType) {
    // @ObjectType({ isAbstract: true })
    // @InputType({ isAbstract: true })
    @Entity()
    class TimestampTrait_Class extends BaseClass {
    @Column()
      @Field(type => Date)
      createdAt: Date;

      @Column()
      @Field(type => Date)
      modifiedAt: Date;
    }
    return TimestampTrait_Class;
  }
