-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2024 at 03:29 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `footwear_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `anak-anaks`
--

CREATE TABLE `anak-anaks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pricedescription` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `anak-anaks`
--

INSERT INTO `anak-anaks` (`id`, `title`, `description`, `pricedescription`, `image`) VALUES
(1, 'Irving Dunk', 'Sepatu untuk anak-anak dengan desain keren.', 'Rp 3.999.000,-', 'http://localhost:3020/gambar/irvingdunk.jpg'),
(2, 'Hustle', 'Sepatu olahraga untuk anak-anak aktif.', 'Rp 1.099.000,-', 'http://localhost:3020/gambar/hustle.jpeg'),
(3, 'White Junior', 'Sepatu casual putih untuk gaya santai.', 'Rp 599.000,-', 'http://localhost:3020/gambar/whitejunior.jpeg'),
(4, 'Pink Kitty', 'Sepatu dengan motif kucing untuk anak perempuan.', 'Rp 1.199.000,-', 'http://localhost:3020/gambar/pinkkitty.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `bests`
--

CREATE TABLE `bests` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pricedescription` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bests`
--

INSERT INTO `bests` (`id`, `title`, `description`, `pricedescription`, `image`) VALUES
(1, 'Black Force', 'Sepatu Black Force adalah sepatu yang memberikan performa dan kekuatan ekstra.', 'Rp 1.599.000,-', 'http://localhost:3020/gambar/blackforce.jpeg'),
(2, 'Blaze Runner', 'Blaze Runner adalah sepatu dengan desain modern dan kenyamanan maksimal.', 'Rp 1.299.000,-', 'http://localhost:3020/gambar/blazerunner.jpg'),
(3, 'Stealth Force', 'Stealth Force adalah sepatu dengan desain futuristik dan kekuatan tinggi.', 'Rp 1.599.000,-', 'http://localhost:3020/gambar/stealthforce.jpg'),
(4, 'Venomous Viper', 'Venomous Viper adalah sepatu yang memadukan gaya dan kecepatan.', 'Rp 1.499.000,-', 'http://localhost:3020/gambar/venomousviper.jpeg'),
(5, 'Arctic Edge', 'Arctic Edge adalah sepatu yang tahan air dan cocok untuk cuaca ekstrem.', 'Rp 2.199.000,-', 'http://localhost:3020/gambar/articedge.jpeg'),
(6, 'Titan Stride', 'Titan Stride adalah sepatu lari dengan teknologi canggih untuk kenyamanan.', 'Rp 1.899.000,-', 'http://localhost:3020/gambar/titanstride.jpeg'),
(7, 'FreeStride', 'FreeStride adalah sepatu yang memberikan kebebasan gerak tanpa batas.', 'Rp 1.699.000,-', 'http://localhost:3020/gambar/freestride.jpeg'),
(8, 'Phoenix Fury', 'Phoenix Fury adalah sepatu basket dengan desain agresif.', 'Rp 1.799.000,-', 'http://localhost:3020/gambar/pheonixfury.jpeg'),
(9, 'Flashfire Fury', 'Flashfire Fury adalah sepatu futsal dengan desain memukau sangat keren .', 'Rp 1.999.000,-', 'http://localhost:3020/gambar/flashfirefury.jpeg'),
(10, 'Stealth Performance', 'Stealth Performance adalah sepatu olahraga dengan performa tinggi.', 'Rp 2.299.000,-', 'http://localhost:3020/gambar/stealthperformance.jpeg'),
(11, 'Green Grid', 'Green Grid adalah sepatu dengan desain modern dan tahan lama.', 'Rp 1.299.000,-', 'http://localhost:3020/gambar/greengrid.jpg'),
(12, 'Zero Gravity', 'Zero Gravity adalah sepatu lari ringan dengan teknologi anti-gravitasi.', 'Rp 2.499.000,-', 'http://localhost:3020/gambar/zerogravity.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `keranjang-products`
--

CREATE TABLE `keranjang-products` (
  `id` int(11) NOT NULL,
  `itemId` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `pricedescription` varchar(255) NOT NULL,
  `quantity` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lokals`
--

CREATE TABLE `lokals` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pricedescription` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lokals`
--

INSERT INTO `lokals` (`id`, `title`, `description`, `pricedescription`, `image`) VALUES
(1, 'AVRYN', 'Sepatu AVRYN adalah sepatu yang nyaman dan bergaya untuk setiap kesempatan.', 'Rp 999.000,-', 'http://localhost:3020/gambar/arvyn.jpg'),
(2, 'AVRYN Z', 'Sepatu AVRYN Z adalah sepatu yang elegan dan nyaman untuk digunakan dalam berbagai kesempatan.', 'Rp 1.799.000,-', 'http://localhost:3020/gambar/arvynz.jpg'),
(3, 'Black Force', 'Sepatu Black Force adalah sepatu yang memberikan performa dan kekuatan ekstra.', 'Rp 1.599.000,-', 'http://localhost:3020/gambar/blackforce.jpeg'),
(4, 'Blaze Runner', 'Blaze Runner adalah sepatu dengan desain modern dan kenyamanan maksimal.', 'Rp 1.299.000,-', 'http://localhost:3020/gambar/blazerunner.jpg'),
(5, 'Stealth Force', 'Stealth Force adalah sepatu dengan desain futuristik dan kekuatan tinggi.', 'Rp 1.599.000,-', 'http://localhost:3020/gambar/stealthforce.jpg'),
(6, 'Venomous Viper', 'Venomous Viper adalah sepatu yang memadukan gaya dan kecepatan.', 'Rp 1.499.000,-', 'http://localhost:3020/gambar/venomousviper.jpeg'),
(7, 'Titan Stride', 'Titan Stride adalah sepatu lari dengan teknologi canggih untuk kenyamanan maksimal.', 'Rp 1.899.000,-', 'http://localhost:3020/gambar/titanstride.jpeg'),
(8, 'Stealth Performance', 'Stealth Performance adalah sepatu olahraga dengan performa tinggi.', 'Rp 2.299.000,-', 'http://localhost:3020/gambar/stealthperformance.jpeg'),
(9, 'Voyager Trail', 'Voyager Trail adalah sepatu hiking yang tangguh dan nyaman dalam menerjang rintangan.', 'Rp 1.699.000,-', 'http://localhost:3020/gambar/voyagertrail.jpeg'),
(10, 'Arctic Edge', 'Arctic Edge adalah sepatu yang tahan air dan cocok untuk cuaca ekstrem.', 'Rp 2.199.000,-', 'http://localhost:3020/gambar/articedge.jpeg'),
(11, 'FreeStride', 'FreeStride adalah sepatu yang memberikan kebebasan gerak tanpa batas.', 'Rp 1.699.000,-', 'http://localhost:3020/gambar/freestride.jpeg'),
(12, 'Nike', 'Nike adalah merek sepatu terkenal dengan inovasi dan gaya yang trendi.', 'Rp 2.199.000,-', 'http://localhost:3020/gambar/nike.jpg'),
(13, 'Zero Gravity', 'Zero Gravity adalah sepatu lari ringan dengan teknologi anti-gravitasi.', 'Rp 2.499.000,-', 'http://localhost:3020/gambar/zerogravity.jpeg'),
(14, 'Flashfire Fury', 'Flashfire Fury adalah sepatu futsal dengan desain memukau sangat keren .', 'Rp 1.999.000,-', 'http://localhost:3020/gambar/flashfirefury.jpeg'),
(15, 'Phoenix Fury', 'Phoenix Fury adalah sepatu basket dengan desain agresif dan meningkatkan fleksibilitas.', 'Rp 1.799.000,-', 'http://localhost:3020/gambar/pheonixfury.jpeg'),
(16, 'Green Grid', 'Green Grid adalah sepatu dengan desain modern dan tahan lama.', 'Rp 1.299.000,-', 'http://localhost:3020/gambar/greengrid.jpg'),
(17, 'Bunny walk', 'Bunny walk adalah sepatu yang lucu dan nyaman untuk berjalan santai.', 'Rp 999.000,-', 'http://localhost:3020/gambar/bunnywalk.jpeg'),
(18, 'Adidas', 'Adidas adalah merek sepatu terkenal dengan kualitas yang terpercaya.', 'Rp 1.499.000,-', 'http://localhost:3020/gambar/adidas.jpeg'),
(19, 'White Art', 'White Art adalah sepatu dengan desain yang elegan dan nyaman.', 'Rp 1.899.000,-', 'http://localhost:3020/gambar/whiteart.jpeg'),
(20, 'Kite nizz', 'Kite nizz adalah sepatu dengan desain yang keren dan nyaman.', 'Rp 899.000,-', '../public/gambar/kitenizz.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `pria`
--

CREATE TABLE `pria` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pricedescription` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pria`
--

INSERT INTO `pria` (`id`, `title`, `pricedescription`, `image`) VALUES
(1, 'AVRYN', 'Rp 999.000,-', 'http://localhost:3020/gambar/arvyn.jpg'),
(2, 'AVRYN Z', 'Rp 1.799.000,-', 'http://localhost:3020/gambar/arvynz.jpg'),
(3, 'Black Force', 'Rp 1.599.000,-', 'http://localhost:3020/gambar/blackforce.jpeg'),
(4, 'Blaze Runner', 'Rp 1.299.000,-', 'http://localhost:3020/gambar/blazerunner.jpg'),
(5, 'Stealth Force', 'Rp 1.599.000,-', 'http://localhost:3020/gambar/stealthforce.jpg'),
(6, 'Venomous Viper', 'Rp 1.499.000,-', 'http://localhost:3020/gambar/venomousviper.jpeg'),
(7, 'Arctic Edge', 'Rp 2.199.000,-', 'http://localhost:3020/gambar/articedge.jpeg'),
(8, 'Stealth Performance', 'Rp 2.299.000,-', 'http://localhost:3020/gambar/stealthperformance.jpeg'),
(9, 'Voyager Trail', 'Rp 1.699.000,-', 'http://localhost:3020/gambar/voyagertrail.jpeg'),
(10, 'FreeStride', 'Rp 1.699.000,-', 'http://localhost:3020/gambar/freestride.jpeg'),
(11, 'Titan Stride', 'Rp 1.899.000,-', 'http://localhost:3020/gambar/titanstride.jpeg'),
(12, 'Nike', 'Rp 2.199.000,-', 'http://localhost:3020/gambar/nike.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `terbarus`
--

CREATE TABLE `terbarus` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pricedescription` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `terbarus`
--

INSERT INTO `terbarus` (`id`, `title`, `description`, `pricedescription`, `image`) VALUES
(1, 'Venomous Viper', 'Venomous Viper adalah sepatu yang memadukan gaya dan kecepatan.', 'Rp 1.499.000,-', 'http://localhost:3020/gambar/venomousviper.jpeg'),
(2, 'Arctic Edge', 'Arctic Edge adalah sepatu yang tahan air dan cocok untuk cuaca ekstrem.', 'Rp 2.199.000,-', 'http://localhost:3020/gambar/articedge.jpeg'),
(3, 'Irving Dunk', 'Sepatu untuk anak-anak dengan desain keren memberikan kenyamanan optimal', 'Rp 3.999.000,-', 'http://localhost:3020/gambar/irvingdunk.jpg'),
(4, 'Hustle', 'Sepatu olahraga untuk anak-anak aktif dengan desain yang dinamis dan teknologi.', 'Rp 1.099.000,-', 'http://localhost:3020/gambar/hustle.jpeg'),
(5, 'White Junior', 'Sepatu casual putih untuk gaya santai. White Junior adalah pilihan sempurna', 'Rp 599.000,-', 'http://localhost:3020/gambar/whitejunior.jpeg'),
(6, 'Pink Kitty', 'Sepatu dengan motif kucing untuk anak perempuan, gaya lucu yang disukai anak-anak perempuan.', 'Rp 1.199.000,-', 'http://localhost:3020/gambar/pinkkitty.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `role` varchar(255) DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `phone`, `refresh_token`, `role`, `createdAt`, `updatedAt`) VALUES
(2, 'alvin', 'alvinlo@gmail.com', '$2b$10$qLVpKSAfiv.J/jzly3kOk.SbSCpOWY4iBi3YKkEWkjC1C/DxEiYFS', '08979728413', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJhbHZpbiIsImVtYWlsIjoiYWx2aW5sb0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcwNTg0NzMwOCwiZXhwIjoxNzA1OTMzNzA4fQ.vPsMT1VfcTELpCHVg1Fqnge0DdiUYNdRbAFXVMMq1E0', 'user', '2024-01-21 14:23:01', '2024-01-21 14:28:28'),
(3, 'bunny', 'bunny@gmail.com', '$2b$10$K4ePeszmfGBdaas9FsNP/Oe3GMF.NSjCLq.1QZVUgB0RjNH5wCCYy', '08979728413', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJidW5ueSIsImVtYWlsIjoiYnVubnlAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDU4NDczMjQsImV4cCI6MTcwNTkzMzcyNH0.xux3KF9ZnaplhnJmiY0qMM9gvewWnkzMlpXoRAuQ_nQ', 'user', '2024-01-21 14:28:42', '2024-01-21 14:28:44');

-- --------------------------------------------------------

--
-- Table structure for table `wanita`
--

CREATE TABLE `wanita` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pricedescription` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wanita`
--

INSERT INTO `wanita` (`id`, `title`, `pricedescription`, `image`) VALUES
(1, 'Zero Gravity', 'Rp 2.499.000,-', 'http://localhost:3020/gambar/zerogravity.jpeg'),
(2, 'Flashfire Fury', 'Rp 1.999.000,-', 'http://localhost:3020/gambar/flashfirefury.jpeg'),
(3, 'Phoenix Fury', 'Rp 1.799.000,-', 'http://localhost:3020/gambar/pheonixfury.jpeg'),
(4, 'Green Grid', 'Rp 1.299.000,-', 'http://localhost:3020/gambar/greengrid.jpg'),
(5, 'Bunny walk', 'Rp 999.000,-', 'http://localhost:3020/gambar/bunnywalk.jpeg'),
(6, 'Adidas', 'Rp 1.499.000,-', 'http://localhost:3020/gambar/adidas.jpeg'),
(7, 'Nike z', 'Rp 2.499.000,-', 'http://localhost:3020/gambar/nikez.jpeg'),
(8, 'Running Shoes', 'Rp 1.499.000,-', 'http://localhost:3020/gambar/runningshoes.jpeg'),
(9, 'White Art', 'Rp 1.899.000,-', 'http://localhost:3020/gambar/whiteart.jpeg'),
(10, 'ZenWalk', 'Rp 1.799.000,-', 'http://localhost:3020/gambar/zenwalk.jpeg'),
(11, 'Swift Flex', 'Rp 1.299.000,-', 'http://localhost:3020/gambar/swiftflex.jpeg'),
(12, 'RapidFire', 'Rp 1.899.000,-', 'http://localhost:3020/gambar/rapidfire.jpeg'),
(13, 'Sneakers', 'Rp 999.000,-', 'http://localhost:3020/gambar/sneakers.jpeg'),
(14, 'Graceful Slip-On', 'Rp 999.000,-', 'http://localhost:3020/gambar/gracefulslip-on.jpeg'),
(15, 'Solar Flare', 'Rp 2.299.000,-', 'http://localhost:3020/gambar/solarflare.jpeg'),
(16, 'Kite nizz', 'Rp 899.000,-', 'http://localhost:3020/gambar/kitenizz.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anak-anaks`
--
ALTER TABLE `anak-anaks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bests`
--
ALTER TABLE `bests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keranjang-products`
--
ALTER TABLE `keranjang-products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lokals`
--
ALTER TABLE `lokals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pria`
--
ALTER TABLE `pria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `terbarus`
--
ALTER TABLE `terbarus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wanita`
--
ALTER TABLE `wanita`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anak-anaks`
--
ALTER TABLE `anak-anaks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bests`
--
ALTER TABLE `bests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `keranjang-products`
--
ALTER TABLE `keranjang-products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `lokals`
--
ALTER TABLE `lokals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `pria`
--
ALTER TABLE `pria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `terbarus`
--
ALTER TABLE `terbarus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `wanita`
--
ALTER TABLE `wanita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
