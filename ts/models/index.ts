import { author } from "./Author.js";
import { Movie } from "./Movie.js";
import { Actor } from "./Actor.js";


// author.hasMany(Movie);
// author.belongsTo(Movie);

// Movie.hasOne(author);
// Movie.belongsTo(author);
// Movie.hasMany(Actor);
// Movie.belongsTo(Actor);

// Actor.hasOne(Movie);
// Actor.belongsTo(Movie);

export { author as Author, Movie, Actor };
