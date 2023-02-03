import { Author } from "../../models/index.js";

export async function createAuthor(authorName: string) {
  // Create a new user
  const author:any = await Author.create(
    {
      authorName: authorName,
    }
  );
  return {
    authorName: author.authorName
  };
}
