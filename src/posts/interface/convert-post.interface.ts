export interface ConvertUpdatePostDto {
  inputPost: Pick<Post, 'id' | 'title' | 'content'>;
  prevPost: Omit<Post, 'category' | 'tags'>;
  inputCategory: string;
  prevCategory: Category;
  inputTags: string[];
  prevTags: Tag[];
}
