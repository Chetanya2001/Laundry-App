import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false, // Set to false in production; use migrations
  logging: false,
  migrations: ["migrations/*.ts"],
});

export const connectDB = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("PostgreSQL connected");
  } catch (err: unknown) {
    console.error(err);
    process.exit(1);
  }
};
