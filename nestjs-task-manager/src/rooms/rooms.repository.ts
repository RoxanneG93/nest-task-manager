import { Repository, EntityRepository, getRepository } from 'typeorm';
import {Room} from './rooms.entity';
import {RoomInput} from './rooms.input';
import {RoomType} from './dto/create-room.dto';
import {Building} from '../buildings/buildings.entity';
// May provide higher order functions for the database
@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {

    // we can define custome methods withing the repository
    async createRoom(roomData: RoomInput): Promise<Room> {

        console.log(roomData);

        const {name, number, buildingNo} = roomData;

        const buildingRepository = getRepository(Building);

        let building;

        building = await buildingRepository.findOne(buildingNo);

        const room = new Room();
        room.number = number ;
        room.name = name;
        room.building = building;

        await this.save(room);

        return room;
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
}
