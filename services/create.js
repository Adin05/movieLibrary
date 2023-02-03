import { Author } from "../models/index.js";
export async function createAuthor(authorName) {
    // Create a new user
    const author = await Author.create({
        authorName: authorName,
    });
    console.log("data:", author);
    return {
        authorName: author.authorName
    };
}
