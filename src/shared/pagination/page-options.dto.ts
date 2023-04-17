import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderEnum } from '../enums/order.enum';

export class PageOptionsDto {
  @ApiPropertyOptional({
    enum: OrderEnum,
    default: OrderEnum.ASC,
    description: 'ASC or DESC',
  })
  @IsEnum(OrderEnum)
  @IsOptional()
  readonly order?: OrderEnum = OrderEnum.ASC;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
    description: 'The page number',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
    description: 'The number of items per page',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly take?: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}