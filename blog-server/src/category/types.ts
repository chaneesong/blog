import { Category } from './entities/category.entity';

export type CategoryCore = Pick<Category, 'id' | 'keyword'>;
