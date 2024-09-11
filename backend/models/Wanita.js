import { sequelize, DataTypes } from "../config/footweardb.js";



const Wanita = sequelize.define(
  'Wanita',
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
//         title: 'Zero Gravity',
//         pricedescription: 'Rp 2.499.000,-',
//         price: 2499000,
//         image: "http://localhost:3020/gambar/zerogravity.jpeg"
//     },
//     {
//         title: 'Flashfire Fury',
//         pricedescription: 'Rp 1.999.000,-',
//         price: 1999000,
//         image: "http://localhost:3020/gambar/flashfirefury.jpeg"
//     },
//     {
//         title: 'Phoenix Fury',
//         pricedescription: 'Rp 1.799.000,-',
//         price: 1999000,
//         image: "http://localhost:3020/gambar/pheonixfury.jpeg"
//     },
//     {
//         title: 'Green Grid',
//         pricedescription: 'Rp 1.299.000,-',
//         price: 1299000,
//         image:  "http://localhost:3020/gambar/greengrid.jpg"
//     },
//     {
//         title: 'Bunny walk',
//         pricedescription: 'Rp 999.000,-',
//         price: 999000,
//         image:  "http://localhost:3020/gambar/bunnywalk.jpeg"
//     },
//     {
//         title: 'Adidas',
//         pricedescription: 'Rp 1.499.000,-',
//         price: 1499000,
//         image:  "http://localhost:3020/gambar/adidas.jpeg"
//     },
//     {
//         title: 'White Art',
//         pricedescription: 'Rp 1.899.000,-',
//         price: 1899000,
//         image:  "http://localhost:3020/gambar/whiteart.jpeg"
//     },
//     {
//         title: 'Nike z',
//         pricedescription: 'Rp 2.499.000,-',
//         price: 2499000,
//         image:  "http://localhost:3020/gambar/nikez.jpeg"
//     }, 
//     {
//         title: 'Swift Flex',
//         pricedescription: 'Rp 1.299.000,-',
//         price: 1299000,
//         image:  "http://localhost:3020/gambar/swiftflex.jpeg"
//     },
//     {
//         title: 'RapidFire',
//         pricedescription: 'Rp 1.899.000,-',
//         price: 1899000,
//         image:  "http://localhost:3020/gambar/rapidfire.jpeg"
//     },
//     {
//         title: 'Running Shoes',
//         pricedescription: 'Rp 1.499.000,-',
//         price: 1499000,
//         image:  "http://localhost:3020/gambar/runningshoes.jpeg"
//     },
//     {
//         title: 'ZenWalk',
//         pricedescription: 'Rp 1.799.000,-',
//         price: 1799000,
//         image:  "http://localhost:3020/gambar/zenwalk.jpeg"
//     },
//     {
//         title: 'Sneakers',
//         pricedescription: 'Rp 999.000,-',
//         price: 999000,
//         image:  "http://localhost:3020/gambar/sneakers.jpeg"
//     },
//     {
//         title: 'Graceful Slip-On',
//         pricedescription: 'Rp 999.000,-',
//         price: 999000,
//         image:  "http://localhost:3020/gambar/gracefulslip-on.jpeg"
//     },
//     {
//         title: 'Solar Flare',
//         pricedescription: 'Rp 2.299.000,-',
//         price: 2299000,
//         image:  "http://localhost:3020/gambar/solarflare.jpeg"
//     },
//     {
//         title: 'Kite nizz',
//         pricedescription: 'Rp 899.000,-',
//         price: 899000,
//         image:  "http://localhost:3020/gambar/kitenizz.jpg"
//     },
//     ];

//     // Menambahkan setiap produk ke database
//     await Promise.all(initialProducts.map(async (product) => {
//       await Wanita.create(product);
//     }));

//     console.log('Initial products  added to the database');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

export default Wanita;
