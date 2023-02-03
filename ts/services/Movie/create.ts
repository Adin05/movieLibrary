import { Movie } from "../../models/index.js";
import { getAuthor } from "../Author/index.js";

export async function createMovie(name: string, authorId: number) {
  // Create a new user
  const movie:any = await Movie.create(
    {
      movieName: name,
      authorID: authorId
    }
  );

  const author: any = await getAuthor(authorId);

  return {
    movieName: movie.movieName,
    authorName: author.authorName
  };
}
