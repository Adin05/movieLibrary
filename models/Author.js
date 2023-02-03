import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection.js";
export class author extends Model {
}
author.init({
    // Model attributes are defined here
    authorName: {
        type: DataTypes.STRING,
    },
}, {
    // Other model options go here
    sequelize,
    modelName: "Author", // We need to choose the model name
});
