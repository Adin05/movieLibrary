import { Movie } from "../../models/index.js";

export async function deleteMovie(id:number) {
  // Create a new user
  await Movie.destroy({
    where: {
      id: id
    }
  });
  return "Success delete";
}
