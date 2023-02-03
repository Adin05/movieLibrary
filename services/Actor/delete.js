import { Actor } from "../../models/index.js";
export async function deleteActor(id) {
    // Create a new user
    await Actor.destroy({
        where: {
            id: id
        }
    });
    return "Success delete";
}
