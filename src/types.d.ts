type Category = string;

type Tag = string;

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
  category: string;
  tags: string[];
  createdAt: string;
}

interface PostCardProps {
  post: Post;
}

interface ReactNodeProps {
  children: React.ReactNode;
}
