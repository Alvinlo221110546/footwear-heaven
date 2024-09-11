import { sequelize, DataTypes } from "../config/footweardb.js";

const Keranjangs = sequelize.define('keranjang-product', {
  itemId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pricedescription: {
    type: DataTypes.STRING,
    allowNull: false,
  }, quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1, 
  }
},{ timestamps: false });

export default Keranjangs;



