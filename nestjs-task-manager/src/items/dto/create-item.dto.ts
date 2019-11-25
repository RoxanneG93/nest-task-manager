import {ObjectType, Field, Int, ID} from 'type-graphql'
import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

// Defines how our data object will be sent over the network
@ObjectType()
export class ItemType {
    @Field()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @Field()
    @IsNumber()
    readonly price:number;

    @Field()
    @IsString()
    readonly description: string;

}