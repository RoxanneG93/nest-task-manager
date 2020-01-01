import {InputType, Field, Int, ObjectType} from 'type-graphql';
// specified type for item object that we will query
@InputType()
export class RoomInput {
    @Field()
    number: number;

    @Field()
    name: string;

    @Field()
    buildingNo: number;

}
