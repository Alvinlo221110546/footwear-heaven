import  express  from "express";
import { getUsers,Register,Login,Logout } from "../controller/users.js";
import { refreshToken } from "../controller/RefershToken.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
import * as AnakController from '../controller/AnakController.js';
import * as PriaController from '../controller/PriaController.js';
import * as WanitaController from '../controller/WanitaController.js';
import * as LokalController from '../controller/LokalController.js';
import * as BestController from '../controller/BestController.js';
import * as TerbaruController from '../controller/TerbarusController.js';
import * as KeranjangController from '../controller/KeranjangController.js';


const routers = express.Router();

routers.get('/users',VerifyToken,getUsers);
routers.post('/users',Register);
routers.post('/login',Login);
routers.get('/token',refreshToken);
routers.delete('/logout',Logout);


// ===== PRODUCT ROUTES =====
// Anak Routes
routers.get('/anak', AnakController.getProducts);
routers.get('/anak/:id', AnakController.getProductById);
routers.post('/anak', AnakController.createProduct);
routers.put('/anak/:id', AnakController.updateProduct);
routers.delete('/anak/:id', AnakController.deleteProduct);

// Pria Routes
routers.get('/pria', PriaController.getProducts);
routers.get('/pria/:id', PriaController.getProductById);
routers.post('/pria', PriaController.createProduct);
routers.put('/pria/:id', PriaController.updateProduct);
routers.delete('/pria/:id', PriaController.deleteProduct);

// Wanita Routes
routers.get('/wanita', WanitaController.getProducts);
routers.get('/wanita/:id', WanitaController.getProductById);
routers.post('/wanita', WanitaController.createProduct);
routers.put('/wanita/:id', WanitaController.updateProduct);
routers.delete('/wanita/:id', WanitaController.deleteProduct);

// Keranjang Routes
routers.get('/keranjang', KeranjangController.getCartItems);
routers.post('/keranjang', KeranjangController.addToCart);
routers.put('/keranjang/:itemId', KeranjangController.updateCartItem);
routers.delete('/keranjang/:itemId', KeranjangController.deleteCartItem);
routers.delete('/keranjang', KeranjangController.clearCart);

// Best Products
routers.get('/best', BestController.getProducts);
routers.get('/best/:id', BestController.getProductById);
routers.post('/best', BestController.createProduct);
routers.put('/best/:id', BestController.updateProduct);
routers.delete('/best/:id', BestController.deleteProduct);

// Wanita Products
routers.get('/wanita', WanitaController.getProducts);
routers.get('/wanita/:id', WanitaController.getProductById);
routers.post('/wanita', WanitaController.createProduct);
routers.put('/wanita/:id', WanitaController.updateProduct);
routers.delete('/wanita/:id', WanitaController.deleteProduct);

// Lokal Products
routers.get('/lokals', LokalController.getProducts);
routers.get('/lokals/:id', LokalController.getProductById);
routers.post('/lokals', LokalController.createProduct);
routers.put('/lokals/:id', LokalController.updateProduct);
routers.delete('/lokals/:id', LokalController.deleteProduct);

// Terbaru Products
routers.get('/terbarus', TerbaruController.getProducts);
routers.get('/terbarus/:id', TerbaruController.getProductById);
routers.post('/terbarus', TerbaruController.createProduct);
routers.put('/terbarus/:id', TerbaruController.updateProduct);
routers.delete('/terbarus/:id', TerbaruController.deleteProduct);




export default routers;

