import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  process.env.TZ = 'UTC'

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  swaggerConfig(app);

  await app.listen(configService.get('app.port'));
}

bootstrap();

function swaggerConfig(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NestJS Base Boilerplate APIs')
    .setContact('Nguyen Linh Thanh Nhan', '','nguyenlinhthanhnhan@outlook.com')
    .setDescription('Powered by NestJS, TypeORM, Swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
