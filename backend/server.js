import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', corsOrigin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.use('/api', routes);

app.listen(port,"0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
