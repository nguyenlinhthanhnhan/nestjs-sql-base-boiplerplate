import { Repository } from 'typeorm';
import { MockType} from './mock.type';

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => {
  return {
    create: jest.fn(entity => entity),
    save: jest.fn(entity => entity),
    findOne: jest.fn(entity => entity),
    find: jest.fn(entity => entity),
    update: jest.fn(entity => entity),
    delete: jest.fn(entity => entity),
    count: jest.fn(entity => entity),
  };
});