import {Repository, EntityRepository} from 'typeorm';
import {User} from './user.entity';
import {AuthCredentialsDto} from '../auth/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';


@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async register(authCredentialsDto: AuthCredentialsDto) :Promise<void>{
        const {username, password} = authCredentialsDto;

        const exists = this.findOne({username});

        if(exists){

        }

        try {
            const user = new User();
            user.username = username;
            user.password = password;
            await user.save();
        } catch(error){
            console.log(error.code);
            if(error.code === "ER_DUP_ENTRY"){
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
       
    }
}