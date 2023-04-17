import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {AutoMap} from '@automapper/classes';

@Entity({
    name: 'users',
})
export class User {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({
        name: 'username',
        type: 'varchar',
        length: '200',
    })
    username: string;

    @AutoMap()
    @Column({
        name: 'password',
        type: 'text',
    })
    password: string;

    @AutoMap()
    @Column({
        name: 'email',
        type: 'varchar',
        length: '200',
        nullable: true,
    })
    email: string;

    @AutoMap()
    @Column({name: 'refresh_token', type: 'text', nullable: true})
    refreshToken: string;
}