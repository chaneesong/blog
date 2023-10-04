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
