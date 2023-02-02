import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection.js";
import { Actor, Author } from "./index.js";


export class Movie extends Model {}

 Movie.init(
  {
    // Model attributes are defined here
    movie_name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Movie", // We need to choose the model name
  }
);
