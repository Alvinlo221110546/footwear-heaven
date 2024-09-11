import { sequelize, DataTypes } from "../config/footweardb.js";

const Pria = sequelize.define(
  'Pria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING, 
    },
    pricedescription: {
      type: DataTypes.STRING, 
    },
    image: {
      type: DataTypes.STRING, 
    },
  },
  { timestamps: false }
);

// (async () => {
//   try {
//     await sequelize.sync();

//     const initialProducts = [
//       {
//         title: 'AVRYN',
//         pricedescription: 'Rp 999.000,-',
//         price: 999000,
//         image: "http://localhost:3020/gambar/arvyn.jpg"
//     },
//     {
//         title: 'AVRYN Z',
//         pricedescription: 'Rp 1.799.000,-',
//         price: 1799000,
//         image: "http://localhost:3020/gambar/arvynz.jpg"
//     },
//     {
//         title: 'Black Force',
//         pricedescription: 'Rp 1.599.000,-',
//         price: 1599000,
//         image: "http://localhost:3020/gambar/blackforce.jpeg"

//     },
//     {
//         title: 'Blaze Runner',
//         pricedescription: 'Rp 1.299.000,-',
//         price: 1299000,
//         image: "http://localhost:3020/gambar/blazerunner.jpg"
//     },
//     {
//         title: 'Stealth Force',
//         pricedescription: 'Rp 1.599.000,-',
//         price: 1599000,
//         image: "http://localhost:3020/gambar/stealthforce.jpg"
//     },
//     {
//         title: 'Venomous Viper',
//         pricedescription: 'Rp 1.499.000,-',
//         price: 1499000,
//         image: "http://localhost:3020/gambar/venomousviper.jpeg"
//     },
//     {
//         title: 'Arctic Edge',
//         pricedescription: 'Rp 2.199.000,-',
//         price: 2199000,
//         image: "http://localhost:3020/gambar/articedge.jpeg"
//     },
//     {
//         title: 'Titan Stride',
//         pricedescription: 'Rp 1.899.000,-',
//         price: 1899000,
//         image: "http://localhost:3020/gambar/titanstride.jpeg"
//     },
//     {
//         title: 'Nike',
//         pricedescription: 'Rp 2.199.000,-',
//         price: 2199000,
//         image: "http://localhost:3020/gambar/nike.jpg"
//     },
//     {
//         title: 'Voyager Trail',
//         pricedescription: 'Rp 1.699.000,-',
//         price: 1699000,
//         image: "http://localhost:3020/gambar/voyagertrail.jpeg"
//     },
//     {
//         title: 'Stealth Performance',
//         pricedescription: 'Rp 2.299.000,-',
//         price: 2299000,
//         image: "http://localhost:3020/gambar/stealthperformance.jpeg"
//     },
//     {
//         title: 'FreeStride',
//         pricedescription: 'Rp 1.699.000,-',
//         price: 1699000,
//         image: "http://localhost:3020/gambar/freestride.jpeg"
//     },
//     ];

//     // Menambahkan setiap produk ke database
//     await Promise.all(initialProducts.map(async (product) => {
//       await Pria.create(product);
//     }));

//     console.log('Initial products  added to the database');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

export default Pria;


