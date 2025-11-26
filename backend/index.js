import express from "express";
import cors from "cors";
import { pool } from "pg";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const pool = new pool({
  user: "postgres",
  host: "localhost",
  database: "crud",
  password: "000",
  port: 5432,
});
