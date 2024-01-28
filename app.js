import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname, 'client', 'dist');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(staticPath));

app.get('/api/v1', (_, res) => {
  res.send('Hello, World');
});

app.get('/*', (_, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening port ${PORT}`);
});
