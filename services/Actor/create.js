import { Actor } from "../../models/index.js";
export async function createActor(name) {
    // Create a new user
    const actor = await Actor.create({
        actorName: name,
    });
    return {
        actorName: actor.actorName,
    };
}
