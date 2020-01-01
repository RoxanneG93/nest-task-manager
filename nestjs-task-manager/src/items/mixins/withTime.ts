import { InputType, ClassType, Field, Int, ObjectType } from 'type-graphql';
export default function withTime<TClassType extends ClassType>(BaseClass: TClassType) {
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
