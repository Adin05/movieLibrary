import { Actor } from "../../models/index.js";

export async function createActor(name: string) {
  // Create a new user
  const actor:any = await Actor.create(
    {
      actorName: name,
    }
  );


  return {
    actorName: actor.actorName,
  };
}
