type Category = {
  id: string;
  keyword: string;
};

type Tag = {
  id: string;
  keyword: string;
};

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  category: Category;
  tags: Tag[];
}

interface PostRawData {
  post_id: number;
  post_title: string;
  post_content: string;
  post_createdAt: string;
  category_id: string;
  category_keyword: string;
  tag_id: string;
  tag_keyword: string;
}
