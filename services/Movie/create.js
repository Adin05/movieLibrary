import { Movie } from "../../models/index.js";
import { getAuthor } from "../Author/index.js";
export async function createMovie(name, authorId) {
    // Create a new user
    const movie = await Movie.create({
        movieName: name,
        authorID: authorId
    });
    const author = await getAuthor(authorId);
    return {
        movieName: movie.movieName,
        authorName: author.authorName
    };
}
