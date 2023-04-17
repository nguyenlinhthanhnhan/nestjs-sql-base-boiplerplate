import {User} from './entities/user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Injectable} from '@nestjs/common';
import {Repository, UpdateResult} from 'typeorm';
import {UpdateUserDto} from './dto/update-user.dto';
import {CreateUserDto} from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
    }

    async create(user: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({where: {id}});
    }

    async update(id: number, user: UpdateUserDto): Promise<UpdateResult> {
        return await this.userRepository.update(id, user);
    }

    async findByUsername(username: string): Promise<User> {
        return this.userRepository.findOne({where: {username: username}});
    }
}
