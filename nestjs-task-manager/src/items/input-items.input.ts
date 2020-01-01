import {InputType, Field, Int, ObjectType} from 'type-graphql';
// specified type for item object that we will query
// @InputType()
@ObjectType({ isAbstract: true })
@InputType('ItemDetailsInput', { isAbstract: true })
export class ItemInput {
    @Field()
    readonly name: string;

    @Field(() => Int)
    readonly price: number;

    @Field()
    readonly description: string;

}
