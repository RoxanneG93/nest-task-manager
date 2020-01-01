import { Injectable, NotFoundException} from '@nestjs/common';
import { ItemType } from './dto/create-item.dto';
import { Item } from './items.entity';
import {ItemRepository} from './items.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemInput } from './input-items.input';
// import { ItemInput } from './input-items.input';

@Injectable()
export class ItemsService {

    constructor(
        // tells nest to injec
        @InjectRepository(ItemRepository)
        private itemRepository: ItemRepository,
    ) {}

    async createItem(createItemDto: ItemType ): Promise<Item> {
        // const createdItem = new this.itemModel(createItemDto);
        // return await createdItem.save();
        return this.itemRepository.createItem(createItemDto);
    }

    async findAllItems(): Promise<Item[]> {
        return this.itemRepository.find();
    }

    async findItemById(id: number): Promise<Item> {
        return await this.itemRepository.findOne({ id });
    }

    async deleteItem(id: number): Promise<void> {
        // let's use...a repo method from type orm?
        const result = await this.itemRepository.delete(id);
        console.log(result);
        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        // NEED to figure out a return type...?
    }

    async updateItem(id: number, item: ItemInput): Promise<Item> {

        return this.itemRepository.updateItem(id, item);

        // console.log(item);
        // const {name, price, description} = item;
        // // find by id first
        // const foundItem = await this.findItemById(id);

        // console.log(foundItem);
        // foundItem.name = name;
        // foundItem.price = price;
        // foundItem.description = description;
        // foundItem.updatedAt = new Date();
        // //then update
        // return await foundItem.save();
        // return await this..findByIdAndUpdate(id, item, { new:  true   });
    }
}
