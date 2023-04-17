import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import authConfig from './config/auth.config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TypeOrmConfigService} from './database/typeorm-config.service';
import {DataSource} from 'typeorm';
import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';
import {AutomapperModule} from '@automapper/nestjs';
import {classes} from '@automapper/classes';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig, databaseConfig, authConfig],
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService,
            dataSourceFactory: async (options) => {
                return await new DataSource(options).initialize();
            },
        }),
        AutomapperModule.forRoot({
            strategyInitializer: classes(),
        }),
        AuthModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
