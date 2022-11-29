-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 29, 2022 at 03:09 AM
-- Server version: 10.9.4-MariaDB-log
-- PHP Version: 7.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app_mern_auth_jwt`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `refreshToken`, `createdAt`, `updatedAt`) VALUES
(1, 'Dina Alenda', 'dina22', 'dina@gmail.com', '$2b$10$EBtRZXQL09uhEzzVxgZatOYB1S1VEc.GUz565dZOofQskZ8eyV2P6', NULL, '2022-11-28 06:52:13', '2022-11-28 06:52:13'),
(2, 'Gian Nurwana', 'giannurwana19  ', 'gian@gmail.com', '$2b$10$3Kzh/nMbJuLzMcTvKlcMeOFUj3VFrnMsGzKLPTw3plWV3xVjdSuLm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJnaWFubnVyd2FuYTE5ICAiLCJlbWFpbCI6ImdpYW5AZ21haWwuY29tIiwiaWF0IjoxNjY5NjkxMTcxLCJleHAiOjE2Njk3Nzc1NzF9.xJ1342Ax62BO2GukAWo6YhW_9Y8bEdmd-gr3alTEw2I', '2022-11-28 06:52:42', '2022-11-29 03:06:11'),
(3, 'Siti Nurindah Sari', 'indah13', 'indah@gmail.com', '$2b$10$3D582nVgsRk.OHcfZ.a2x.aaJ4VTQ/kXL9/uK3ZYg9vWcK9YwfgiG', NULL, '2022-11-29 02:42:34', '2022-11-29 02:42:34'),
(4, 'Aulia Syifa', 'syifa88', 'syifa@gmail.com', '$2b$10$.5eLR9Nu65/qkas9w64agefrSIvwy/UAn7pJlCBZSpDFmSmkzW5ie', NULL, '2022-11-29 03:07:00', '2022-11-29 03:07:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
