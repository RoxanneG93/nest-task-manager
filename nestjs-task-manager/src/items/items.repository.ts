import { Repository, EntityRepository } from "typeorm";
import {Item} from './items.entity';
import {ItemType} from './dto/create-item.dto';


// May provide higher order functions for the database
@EntityRepository(Item)
export class ItemRepository extends Repository<Item>{


    // we can define custome methods withing the repository
    async createItem(createItemDto: ItemType):Promise<Item> {
        const {name, price, description} = createItemDto;
        const item = new Item();
        item.name = name;
        item.price = price;
        item.description = description;
        await item.save()
        return item;
    }

    async deleteItem(id: string):Promise<void> {
        
        //first find with id then delete
        
    }
}