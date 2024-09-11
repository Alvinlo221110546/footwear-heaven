import { sequelize, DataTypes } from "../config/footweardb.js";

const Anak = sequelize.define(
  'Anak-anak',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: { 
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
//         title: 'Irving Dunk',
//         description: 'Sepatu untuk anak-anak dengan desain keren.',
//         pricedescription: 'Rp 3.999.000,-',
//         image: 'http://localhost:3020/gambar/irvingdunk.jpg',
//       },
//       {
//         title: 'Hustle',
//         description: 'Sepatu olahraga untuk anak-anak aktif.',
//         pricedescription: 'Rp 1.099.000,-',
//         image: 'http://localhost:3020/gambar/hustle.jpeg',
//       },
//       {
//         title: 'White Junior',
//         description: 'Sepatu casual putih untuk gaya santai.',
//         pricedescription: 'Rp 599.000,-',
//         image: 'http://localhost:3020/gambar/whitejunior.jpeg',
//       },
//       {
//         title: 'Pink Kitty',
//         description: 'Sepatu dengan motif kucing untuk anak perempuan.',
//         pricedescription: 'Rp 1.199.000,-',
//         image: 'http://localhost:3020/gambar/pinkkitty.jpg',
//       },
//     ];

//     // Menambahkan setiap produk ke database
//     await Promise.all(initialProducts.map(async (product) => {
//       await Anak.create(product);
//     }));

//     console.log('Initial products added to the database');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

export default Anak;
