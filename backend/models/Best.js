import { sequelize, DataTypes } from "../config/footweardb.js";

const Best = sequelize.define(
    'Best',
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
//                 title: 'Black Force',
//                 description: 'Sepatu Black Force adalah sepatu yang memberikan performa dan kekuatan ekstra.',
//                 pricedescription: 'Rp 1.599.000,-',
//                 price: 1599000,
//                 image: 'http://localhost:3020/gambar/blackforce.jpeg',
//             },
//             {
//                 title: 'Blaze Runner',
//                 description: 'Blaze Runner adalah sepatu dengan desain modern dan kenyamanan maksimal.',
//                 pricedescription: 'Rp 1.299.000,-',
//                 price: 1299000,
//                 image: 'http://localhost:3020/gambar/blazerunner.jpg',
//             },
//             {
//                 title: 'Stealth Force',
//                 description: 'Stealth Force adalah sepatu dengan desain futuristik dan kekuatan tinggi.',
//                 pricedescription: 'Rp 1.599.000,-',
//                 price: 1599000,
//                 image: 'http://localhost:3020/gambar/stealthforce.jpg',
//             },
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
//                 title: 'Titan Stride',
//                 description: 'Titan Stride adalah sepatu lari dengan teknologi canggih untuk kenyamanan.',
//                 pricedescription: 'Rp 1.899.000,-',
//                 price: 1899000,
//                 image: 'http://localhost:3020/gambar/titanstride.jpeg',
//             },
//             {
//                 title: 'Stealth Performance',
//                 description: 'Stealth Performance adalah sepatu olahraga dengan performa tinggi.',
//                 pricedescription: 'Rp 2.299.000,-',
//                 price: 2299000,
//                 image: 'http://localhost:3020/gambar/stealthperformance.jpeg',
//             },
//             {
//                 title: 'FreeStride',
//                 description: 'FreeStride adalah sepatu yang memberikan kebebasan gerak tanpa batas.',
//                 pricedescription: 'Rp 1.699.000,-',
//                 price: 1699000,
//                 image: 'http://localhost:3020/gambar/freestride.jpeg',
//             },
//             {
//                 title: 'Zero Gravity',
//                 description: 'Zero Gravity adalah sepatu lari ringan dengan teknologi anti-gravitasi.',
//                 pricedescription: 'Rp 2.499.000,-',
//                 price: 2499000,
//                 image: 'http://localhost:3020/gambar/zerogravity.jpeg',
//             },
//             {
//                 title: 'Flashfire Fury',
//                 description: 'Flashfire Fury adalah sepatu futsal dengan desain memukau sangat keren .',
//                 pricedescription: 'Rp 1.999.000,-',
//                 price: 1999000,
//                 image: 'http://localhost:3020/gambar/flashfirefury.jpeg',
//             },
//             {
//                 title: 'Phoenix Fury',
//                 description: 'Phoenix Fury adalah sepatu basket dengan desain agresif.',
//                 pricedescription: 'Rp 1.799.000,-',
//                 price: 1999000,
//                 image: 'http://localhost:3020/gambar/pheonixfury.jpeg',
//             },
//             {
//                 title: 'Green Grid',
//                 description: 'Green Grid adalah sepatu dengan desain modern dan tahan lama.',
//                 pricedescription: 'Rp 1.299.000,-',
//                 price: 1299000,
//                 image: 'http://localhost:3020/gambar/greengrid.jpg',
//             },
            
//         ];

//         // Menambahkan setiap produk ke database
//         await Promise.all(initialProducts.map(async (product) => {
//             await Best.create(product);
//         }));

//         console.log('Initial products  added to the database');
//     } catch (error) {
//         console.error('Error syncing database:', error);
//     }
// })();

export default Best;



