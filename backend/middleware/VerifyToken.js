import  jwt  from "jsonwebtoken";
import auth from "auth";


export const VerifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = auth && authHeader.split(' ')[1];
    
    if (token == null) {
      console.log('No token provided');
      return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.error('Token verification failed:', err.message);
        return res.sendStatus(401);
      }

      req.email = decoded.email;
      next();
    });
};
