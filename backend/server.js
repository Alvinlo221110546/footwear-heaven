import express from 'express';
import Anak from './models/Anak-anak.js';
import Pria from './models/Pria.js';
import Wanita from './models/Wanita.js';
import Lokals from './models/Lokal.js';
import Best from './models/Best.js';
import Terbarus from './models/Terbarus.js';
import Keranjangs from './models/Keranjangs.js'
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import path from 'path';
import routers from './routes/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 8001;


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routers);

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(cookieParser());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/api', routes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
