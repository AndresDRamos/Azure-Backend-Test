import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;

// Database configuration
export const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
    trustServerCertificate: false,
    connectTimeout: 30000,
  },
};
