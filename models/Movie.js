import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection.js";
export class Movie extends Model {
}
Movie.init({
    // Model attributes are defined here
    movieName: {
        type: DataTypes.STRING,
    },
    authorID: {
        type: DataTypes.INTEGER,
    },
}, {
    // Other model options go here
    sequelize,
    modelName: "Movie", // We need to choose the model name
});
