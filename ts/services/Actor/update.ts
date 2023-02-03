import { Actor } from "../../models/index.js";

export async function updateActor(id:number, name: string) {
  // Create a new user
  await Actor.update({ actorName: name }, {
    where: {
      id: id
    }
  });
  return "Success update";
}
