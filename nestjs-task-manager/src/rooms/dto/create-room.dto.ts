import {ObjectType, Field, Int, ID} from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

// Defines how our data object will be sent over the network
@ObjectType()
export class RoomType {
    @Field()
    @IsNumber()
    @IsNotEmpty()
    readonly number: number;

    @Field()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

}
