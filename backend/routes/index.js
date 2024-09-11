import  express  from "express";
import { getUsers,Register,Login,Logout } from "../controller/users.js";
import { refreshToken } from "../controller/RefershToken.js";
import { VerifyToken } from "../middleware/VerifyToken.js";

const routers = express.Router();

routers.get('/users',VerifyToken,getUsers);
routers.post('/users',Register);
routers.post('/login',Login);
routers.get('/token',refreshToken);
routers.delete('/logout',Logout);




export default routers;

