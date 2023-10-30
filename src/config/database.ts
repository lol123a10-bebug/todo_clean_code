import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions";

interface DatabaseConfig {
  type: MongoConnectionOptions['type'];
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export const databaseConfig: DatabaseConfig = {
  type: "mongodb",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 27017,
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
};
