import { Repository, EntityRepository } from 'typeorm';
import {Building} from './buildings.entity';
import {BuildingInput} from './buildings.input';
import {BuildingType} from './dto/create-building.dto';

// May provide higher order functions for the database
@EntityRepository(Building)
export class BuildingRepository extends Repository<Building> {

    // we can define custome methods withing the repository
    async createBuilding(buildingData: BuildingInput): Promise<Building> {

        console.log(buildingData);

        const {number, name, address} = buildingData;
        const building = new Building();
        building.name = name;
        building.number = number;
        building.address = address;

        await this.save(building);

        return building;
    }

    // async updateItem(id: number, item: ItemInput): Promise<Item> {

    //     console.log(item);
    //     const {name, price, description} = item;
    //     // find by id first
    //     const foundItem = await this.findOne(id);

    //     console.log(foundItem);
    //     foundItem.name = name;
    //     foundItem.price = price;
    //     foundItem.description = description;
    //     // foundItem.updatedAt = new Date();
    //     // then update
    //     return await this.save(foundItem);
    //     // return await this..findByIdAndUpdate(id, item, { new:  true   });
    // }

    async deleteBuilding(number): Promise<Building> {

        let building;

        building = await this.findOne(number);

        if (!building) {
            console.log(`cannot find building with number of ${number}`);
            return;
        }

        const copyBuilding = {...building};
        await this.delete(building);
        return copyBuilding;
    }
}
