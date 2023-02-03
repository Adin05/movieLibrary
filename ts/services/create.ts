import { Author } from "../models/index.js";

export async function createAuthor(authorName: string) {
  // Create a new user
  const author:any = await Author.create(
    {
      authorName: authorName,
    }
  );
  console.log("data:", author);
  return {
    authorName: author.authorName
  };
}
