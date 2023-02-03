import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection.js";
export class Actor extends Model {
}
Actor.init({
    // Model attributes are defined here
    actorName: {
        type: DataTypes.STRING,
    },
}, {
    // Other model options go here
    sequelize,
    modelName: "Actor", // We need to choose the model name
});
