import User from "../models/user.js";
import Jwt  from "jsonwebtoken";


export const refreshToken = async (req, res) => {
  try {
    const refreshToken =req.cookies.refreshToken;

    if (!refreshToken) {
      return res.sendStatus(401);
    }

    const user = await User.findAll({
      where: {
        refresh_token: refreshToken
      }
    });

    if (!user[0]) {
      return res.sendStatus(403);
    }

    Jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decode) => {
      if (err) {
        console.error(err); 
        return res.sendStatus(403);
      }

      const userId = user[0].id;
      const name = user[0].name;
      const email = user[0].email;

      const accessToken = Jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m'
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
