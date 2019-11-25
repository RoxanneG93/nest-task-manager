import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';

@Resolver()
export class ItemsResolver {

    constructor(
        private readonly itemsService: ItemsService, 
    ) {}
    
    @Query(() => [ItemType])
    async items() {
        const items = await this.itemsService.findAllItems();
        console.log(items)
        return items;
    }
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
