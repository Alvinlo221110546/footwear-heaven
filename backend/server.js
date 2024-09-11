import express from 'express';
import Anak from './models/Anak-anak.js';
import Pria from './models/Pria.js';
import Wanita from './models/Wanita.js';
import Lokals from './models/lokal.js';
import Best from './models/Best.js';
import Terbarus from './models/terbarus.js';
import Keranjangs from './models/keranjangs.js'
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import path from 'path';
import routers from './routes/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3020;


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



app.get('/api/keranjang', async (req, res) => {
  try {
    const cartItems = await Keranjangs.findAll();
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/keranjang', async (req, res) => {
  try {
    const { title, pricedescription, itemId, quantity } = req.body;
    const existingItem = await Keranjangs.findOne({ where: { itemId } });

    if (existingItem) {
      existingItem.quantity += quantity || 1; 
      await existingItem.save();
      res.json(existingItem);
    } else {
      const newItem = await Keranjangs.create({ title, pricedescription, itemId, quantity });
      res.json(newItem);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/keranjang/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;
    const itemKeranjang = await Keranjangs.findOne({ where: { itemId } });

    if (!itemKeranjang) {
      return res.status(404).json({ error: 'Item keranjang tidak ditemukan' });
    }
    itemKeranjang.quantity = quantity;
    await itemKeranjang.save();
    res.json(itemKeranjang);
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    res.status(500).json({ error: 'Kesalahan server internal' });
  }
});

app.delete('/api/keranjang/:itemId', async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const removedItem = await Keranjangs.destroy({ where: { itemId } });
    res.json(removedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/keranjang', async (req, res) => {
  try {
    await Keranjangs.destroy({ where: {} });
    res.json({ message: 'Semua barang berhasil dihapus dari keranjang' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/api/Anak', async (req, res) => {
  try {
    const products = await Anak.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/Anak', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/Pria', async (req, res) => {
  try {
    const products = await Pria.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/Pria', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/Wanita', async (req, res) => {
  try {
    const products = await Wanita.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/Wanita', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/Lokals', async (req, res) => {
  try {
    const products = await Lokals.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/Lokals', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/Best', async (req, res) => {
  try {
    const products = await Best.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/Best', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/Terbarus', async (req, res) => {
  try {
    const products = await Terbarus.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/Terbarus', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
