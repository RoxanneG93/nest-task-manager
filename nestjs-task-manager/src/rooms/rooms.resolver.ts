import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoomInput } from './rooms.input';
import {RoomRepository} from './rooms.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {Room} from './rooms.entity';
import {RoomType} from './dto/create-room.dto';

@Resolver()
export class RoomResolver {

    constructor(
        @InjectRepository(RoomRepository)
        private readonly roomRepository: RoomRepository,
      ) {
      }

    // @Mutation(() => ItemType)
    // async createItemAmend(@Args('input') input: AmendItemTimstamps) {
    //     return this.itemsService.createItem(input);
    // }

    @Mutation(() => RoomType)
    async createRoom(@Args('input') input: RoomInput) {
        return this.roomRepository.createRoom(input);
    }

    // @Mutation(() => ItemType)
    // async updateItem(@Args('id') id: number, @Args('input') input: ItemInput) {
    //     return this.itemsService.updateItem(id, input);
    // }

    // @Mutation(() => ItemType)
    // async deleteItem(@Args('id') id: number) {
    //     return this.itemsService.deleteItem(id);
    // }
}
