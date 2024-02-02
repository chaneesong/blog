import { Tag } from './entities/tag.entity';

export type TagCore = Pick<Tag, 'id' | 'keyword'>;
