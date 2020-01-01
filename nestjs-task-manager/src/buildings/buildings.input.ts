import {InputType, Field, Int, ObjectType} from 'type-graphql';
// specified type for item object that we will query
@InputType()
export class BuildingInput {
    @Field()
    number: number;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    address: string;

}
