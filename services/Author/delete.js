import { Author } from "../../models/index.js";
export async function deleteAuthor(id) {
    // Create a new user
    await Author.destroy({
        where: {
            id: id
        }
    });
    return "Success delete";
}
