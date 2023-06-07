type Category = string;

type Tag = string;

interface PostCard {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: Category;
  tags: Tag[];
  image?: string;
}
