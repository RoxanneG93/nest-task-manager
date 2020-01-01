import { Repository, EntityRepository } from 'typeorm';
import {Item} from './items.entity';
import {ItemType} from './dto/create-item.dto';
import {ItemInput} from './input-items.input';

// May provide higher order functions for the database
@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {

    // we can define custome methods withing the repository
    async createItem(createItemDto: ItemType): Promise<Item> {

        console.log(createItemDto);

        const {name, price, description} = createItemDto;
        const item = new Item();
        item.name = name;
        item.price = price;
        item.description = description;

        // item.createAt = new Date();
        // item.updatedAt = new Date();

        // item.createdBy = 10;
        // item.modifiedBy = 10;

        await this.save(item);

        return item;
    }

    async updateItem(id: number, item: ItemInput): Promise<Item> {

        console.log(item);
        const {name, price, description} = item;
        // find by id first
        const foundItem = await this.findOne(id);

        console.log(foundItem);
        foundItem.name = name;
        foundItem.price = price;
        foundItem.description = description;
        // foundItem.updatedAt = new Date();
        // then update
        return await this.save(foundItem);
        // return await this..findByIdAndUpdate(id, item, { new:  true   });
    }
}
