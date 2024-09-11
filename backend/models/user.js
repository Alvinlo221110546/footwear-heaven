import { sequelize, DataTypes } from "../config/footweardb.js";

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  refresh_token: {
    type: DataTypes.TEXT
  },
  role: {
    type: DataTypes.STRING, 
    defaultValue: 'user' 
  }
}, {
  freezeTableName: true
});

export default User;


