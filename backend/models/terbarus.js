import { sequelize, DataTypes } from "../config/footweardb.js";

const Terbarus = sequelize.define(
    'Terbarus',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        }, description: {
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
//     try {
//         await sequelize.sync();

//         const initialProducts = [
//             {
//                 title: 'Venomous Viper',
//                 description: 'Venomous Viper adalah sepatu yang memadukan gaya dan kecepatan.',
//                 pricedescription: 'Rp 1.499.000,-',
//                 price: 1499000,
//                 image: 'http://localhost:3020/gambar/venomousviper.jpeg',
//             },
//             {
//                 title: 'Arctic Edge',
//                 description: 'Arctic Edge adalah sepatu yang tahan air dan cocok untuk cuaca ekstrem.',
//                 pricedescription: 'Rp 2.199.000,-',
//                 price: 2199000,
//                 image: 'http://localhost:3020/gambar/articedge.jpeg',
//             },
//             {
//                 title: 'Irving Dunk',
//                 description: 'Sepatu untuk anak-anak dengan desain keren memberikan kenyamanan optimal',
//                 pricedescription: 'Rp 3.999.000,-',
//                 price: 3999000,
//                 image: 'http://localhost:3020/gambar/irvingdunk.jpg',
//               },
//               {
//                 title: 'Hustle',
//                 description: 'Sepatu olahraga untuk anak-anak aktif dengan desain yang dinamis dan teknologi.',
//                 pricedescription: 'Rp 1.099.000,-',
//                 price: 1099000,
//                 image: 'http://localhost:3020/gambar/hustle.jpeg',
//               },
//               {
//                 title: 'White Junior',
//                 description: 'Sepatu casual putih untuk gaya santai. White Junior adalah pilihan sempurna',
//                 pricedescription: 'Rp 599.000,-',
//                 price: 599000,
//                 image: 'http://localhost:3020/gambar/whitejunior.jpeg',
//               },
//               {
//                 title: 'Pink Kitty',
//                 description: 'Sepatu dengan motif kucing untuk anak perempuan, gaya lucu yang disukai anak-anak perempuan.',
//                 pricedescription: 'Rp 1.199.000,-',
//                 price: 1199000,
//                 image: 'http://localhost:3020/gambar/pinkkitty.jpg',
//               },
            
//         ];

//         // Menambahkan setiap produk ke database
//         await Promise.all(initialProducts.map(async (product) => {
//             await Terbarus.create(product);
//         }));

//         console.log('Initial products  added to the database');
//     } catch (error) {
//         console.error('Error syncing database:', error);
//     }
// })();

export default Terbarus;


