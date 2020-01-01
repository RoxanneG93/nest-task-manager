import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class BuildingArgs {
  @Field(type => Int, {nullable: true})
  number?: number;
}
