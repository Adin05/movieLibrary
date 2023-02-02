import { Sequelize, DataTypes, Model } from "sequelize";

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
export const sequelize = new Sequelize(
  "postgres://postgres:123456@localhost:5432/movielibrarydb"
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
// sequelize.close()