import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';
import AmendItemTimstamps from './amend-time';
import AmendItemTimstamps_Class from './mixins/amend-time2';

@Resolver()
export class ItemsResolver {

    constructor(
        private readonly itemsService: ItemsService,
    ) {}

    @Query(() => [ItemType])
    async items() {
        const items = await this.itemsService.findAllItems();
        console.log(items);
        return items;
    }
    // @Mutation(() => ItemType)
    // async createItemAmend(@Args('input') input: AmendItemTimstamps) {
    //     return this.itemsService.createItem(input);
    // }

    @Mutation(() => ItemType)
    async createItem(@Args('input') input: ItemInput) {
        return this.itemsService.createItem(input);
    }

    @Mutation(() => ItemType)
    async updateItem(@Args('id') id: number, @Args('input') input: ItemInput) {
        return this.itemsService.updateItem(id, input);
    }

    @Mutation(() => ItemType)
    async deleteItem(@Args('id') id: number) {
        return this.itemsService.deleteItem(id);
    }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
}
