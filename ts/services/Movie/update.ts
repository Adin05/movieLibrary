import { Movie } from "../../models/index.js";

export async function updateMovie(id:number, movieName: string) {
  // Create a new user
  await Movie.update({ movieName: movieName }, {
    where: {
      id: id
    }
  });
  return "Success update";
}
