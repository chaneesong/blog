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
  // TODO 이미지 변수 임시 제거
  // image?: string;
}

interface PostTitleProp {
  id: number;
  title: string;
  category: Category;
  tags: Tag[];
  createdAt: string;
}

interface PostCardProps {
  post: Post;
}

interface ReactNodeProps {
  children: React.ReactNode;
}
