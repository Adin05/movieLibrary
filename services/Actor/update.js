import { Actor } from "../../models/index.js";
export async function updateActor(id, name) {
    // Create a new user
    await Actor.update({ actorName: name }, {
        where: {
            id: id
        }
    });
    return "Success update";
}
