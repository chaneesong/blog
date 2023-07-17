type Category = string;

type Tag = string;

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: Category;
  tags: Tag[];
}
