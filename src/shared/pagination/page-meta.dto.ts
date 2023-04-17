import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDtoParameters } from './page-meta-dto-parameters';

export class PageMetaDto {
  @ApiProperty({
    type: Number,
    description: 'The current page number',
  })
  readonly page: number;

  @ApiProperty({
    type: Number,
    description: 'The number of items per page',
  })
  readonly take: number;

  @ApiProperty({
    type: Number,
    description: 'The total number of items',
  })
  readonly itemCount: number;

  @ApiProperty({
    type: Number,
    description: 'The total number of pages',
  })
  readonly pageCount: number;

  @ApiProperty({
    type: Boolean,
    description: 'True if there is a previous page',
  })
  readonly hasPreviousPage: boolean;

  @ApiProperty({
    type: Boolean,
    description: 'True if there is a next page',
  })
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}