import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BuildingInput } from './buildings.input';
import {BuildingRepository} from './buildings.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {Building} from './buildings.entity';
import {BuildingType} from './dto/create-building.dto';
import {BuildingArgs} from './building.args';

@Resolver()
export class BuildingResolver {

    constructor(
        @InjectRepository(BuildingRepository)
        private readonly buildingRepository: BuildingRepository,
      ) {
      }

    // @Mutation(() => ItemType)
    // async createItemAmend(@Args('input') input: AmendItemTimstamps) {
    //     return this.itemsService.createItem(input);
    // }

    @Mutation(() => BuildingType)
    async createBuilding(@Args('input') input: BuildingInput) {
        return this.buildingRepository.createBuilding(input);
    }

    // @Mutation(() => ItemType)
    // async updateItem(@Args('id') id: number, @Args('input') input: ItemInput) {
    //     return this.itemsService.updateItem(id, input);
    // }

    @Mutation(() => BuildingType)
    async deleteBuilding(@Args('input') {
        number,
    }: BuildingInput) {
        return this.buildingRepository.deleteBuilding(number);
    }
}
