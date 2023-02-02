import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection.js";
class User extends Model {
}
User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
}, {
    // Other model options go here
    sequelize,
    modelName: "User", // We need to choose the model name
});
export async function getData() {
    // the defined model is the class itself
    const users = await User.findAll();
    //   console.log("All users:", JSON.stringify(users, null, 2));
    return users;
}
