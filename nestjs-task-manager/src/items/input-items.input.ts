import {InputType, Field, Int} from 'type-graphql';
// specified type for item object that we will query
@InputType()
export class ItemInput {
    @Field()
    readonly name: string;

    @Field(() => Int)
    readonly price: number;

    @Field()
    readonly description: string;

}