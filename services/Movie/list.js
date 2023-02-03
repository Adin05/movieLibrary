import { Movie } from "../../models/index.js";
import { getAuthor } from "../Author/index.js";
export async function getMovies() {
    // the defined model is the class itself
    const data = await Movie.findAll();
    // console.log("data:", JSON.stringify(data, null, 2));
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // console.log("element:", JSON.stringify(element, null, 2));
        // console.log("element.authorID:", element.authorID)
        const author = await getAuthor(element.authorID);
        element.authorName = author.authorName;
    }
    return data;
}
export async function getMovie(id) {
    // the defined model is the class itself
    const data = await Movie.findAll({
        where: {
            id: id,
        },
    });
    const movie = data[0];
    const author = await getAuthor(movie.authorID);
    movie.authorName = author.authorName;
    // console.log("All users:", JSON.stringify(data, null, 2));
    return movie;
}
