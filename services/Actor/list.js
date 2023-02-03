import { Actor } from "../../models/index.js";
export async function getActors() {
    // the defined model is the class itself
    const data = await Actor.findAll();
    // console.log("data:", JSON.stringify(data, null, 2));
    return data;
}
export async function getActor(id) {
    // the defined model is the class itself
    const data = await Actor.findAll({
        where: {
            id: id,
        },
    });
    const actor = data[0];
    // console.log("All users:", JSON.stringify(data, null, 2));
    return actor;
}
