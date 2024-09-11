import User from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getUsers = async (req, res) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decodedToken.userId;
        const user = await User.findOne({
            attributes: ['id', 'name', 'email', 'role'], 
            where: {
                id: userId,
            },
        });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



  export const Register = async (req, res) => {
    const { name, email, password, confPassword, phone, isAdmin } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirmasi password tidak cocok" });
    const Salt = await bcrypt.genSalt();
    const hasPassword = await bcrypt.hash(password, Salt);
    try {
        await User.create({
            name: name,
            email: email,
            password: hasPassword,
            phone: phone,
            role: isAdmin ? 'admin' : 'user'
        });
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const Login = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (!match) return res.status(400).json({ msg: "Wrong password" })
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const role = user[0].role; 
        const accessToken = jwt.sign({ userId, name, email, role }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '30m'
        });
        const refreshToken = jwt.sign({ userId, name, email, role }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await User.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true, 
            secure: true 
        });
        delete user[0].dataValues.password;
        user[0].dataValues.accessToken = accessToken;
        res.json(user[0]);
    } catch (error) {
        console.error(error);
        res.status(404).json({ msg: "email tidak ditemukan" });
    }
}


export const Logout = async (req, res) => {
    try {
        const refreshToken = req.cookies ? req.cookies.refreshToken : null;

        if (!refreshToken) {
            return res.sendStatus(204);
        }

        const user = await User.findAll({
            where: {
                refresh_token: refreshToken
            }
        });

        if (!user[0]) {
            return res.sendStatus(204);
        }

        const userId = user[0].id;

        await User.update({ referesh_token: null }, {
            where: {
                id: userId
            }
        });

        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}


