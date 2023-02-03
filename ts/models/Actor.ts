import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection.js";
import { Movie } from "./index.js";

export class Actor extends Model {}

 Actor.init(
  {
    // Model attributes are defined here
    actorName: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Actor", // We need to choose the model name
  }
);
