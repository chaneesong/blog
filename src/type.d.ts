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
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  category: Category;
  tags: Tag[];
}
