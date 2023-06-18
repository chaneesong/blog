type Category = string;

type Tag = string;

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: Category;
  tags: Tag[];
  image?: string;
}

interface PostTitleProp {
  id: number;
  title: string;
  category: string;
  tags: string[];
  createdAt: string;
}

interface ReactNodeProps {
  children: React.ReactNode;
}
