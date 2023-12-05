export interface ConvertUpdatePostDto {
  inputPost: Pick<Post, 'id' | 'title' | 'content'>;
  inputCategory: string;
  prevCategory: Category;
  inputTags: string[];
  prevTags: Tag[];
}
