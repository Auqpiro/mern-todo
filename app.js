import path from "path";
import { fileURLToPath } from 'url';
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRouter from "./routes/todoRouter.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_CONNECT = process.env.DB_CONNECT || 'mongodb://127.0.0.1:27017/todos';

mongoose
  .connect(DB_CONNECT)
  .then(() => console.log('Connected to MongoDB database'))
  .catch(err => console.log(`Database connection error: ${err}`));

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname, 'client', 'dist');

app.use(morgan('tiny'));
app.use(express.json());
app.use('/todos', todoRouter);
app.use(express.static(staticPath));

app.get('/*', (_, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening port ${PORT}`);
});
