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
  createdAt: string;
  category: Category;
  tags: Tag[];
}

interface PostTitleProp {
  id: number;
  title: string;
  category: Category;
  tags: Tag[];
  createdAt: string;
}

interface PostCardProps {
  posts: Post[];
}

interface ReactNodeProps {
  children: React.ReactNode;
}
