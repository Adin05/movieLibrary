import { Author } from "../models/index.js";
export async function updateAuthor(id, authorName) {
    // Create a new user
    await Author.update({ authorName: authorName }, {
        where: {
            id: id
        }
    });
    return "Success update";
}
