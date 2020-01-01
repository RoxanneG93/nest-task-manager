import { InputType, ClassType, Field, Int, ObjectType } from 'type-graphql';

// adds id property to the base, extended class
export default function withTimstamps<TClassType extends ClassType>(BaseClass: TClassType) {
  @ObjectType({ isAbstract: true })
  @InputType({ isAbstract: true })
  class TimestampTrait extends BaseClass {
    @Field(type => Date)
    createdAt: Date;

    @Field(type => Date)
    modifiedAt: Date;
  }
  return TimestampTrait;
}
