-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: real_estate_news
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_users`
--

DROP TABLE IF EXISTS `app_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_users` (
  `id` varchar(255) NOT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `is_enabled` bit(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `verification_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_users`
--

LOCK TABLES `app_users` WRITE;
/*!40000 ALTER TABLE `app_users` DISABLE KEYS */;
INSERT INTO `app_users` VALUES ('06a7978d-ad4a-4b96-95d2-271bd641caa9',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang6',NULL),('08459377-63c5-4794-b69c-f665ecf00c8a',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang9',NULL),('159c674c-d64c-4649-abc0-68564e05dfa0',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','admin',NULL),('17bab4b8-c4cd-44f4-a86a-1cd50cfa4925',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','tunglq',NULL),('1b6e8b65-086d-4ea7-bf7d-3dc68e58357a',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang2',NULL),('2005eb90-dd59-402a-95a3-7618d02bf4f3',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','hungnn',NULL),('39f5d3a8-5d5c-4001-b993-c84017cec464',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang7',NULL),('3e716bc9-4d44-4223-955a-89ed1b3bdeb1',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','thiennd',NULL),('3ebcc654-ecee-4208-9a62-7338d74f9586',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','hienplt',NULL),('484700e8-56da-4e4f-b904-82cc23c4bd93',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang1',NULL),('4f35902c-af4e-4a81-bc3d-23be5d48d110',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang10',NULL),('59046fe6-ebe1-4709-99ae-6e531421f7bd',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang8',NULL),('5d785d81-1b41-44bd-af58-bebcf528e7fe',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang4',NULL),('65a0ab5b-00ea-4e35-9e56-8c1d39399800',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','trannn',NULL),('8a3dfcee-41c8-4050-bd42-88c730869e32',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','thinhlp',NULL),('9b2d3f71-94f5-4c47-90e4-be30a96cf433',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','taivd',NULL),('d20699c6-567a-4cb7-85b4-1098ec27a509',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang5',NULL),('d6b9af98-e03d-46a7-bc58-29d1e76a8df2',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khachhang3',NULL),('d8a064d6-a795-480c-9189-7d6b2c89e8c5',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','doanhnv',NULL),('e407890e-fcab-41ec-84b0-ce9c033bddb9',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','khaipn',NULL),('f3ea6f0b-bbdc-4652-a43b-1ef78e593436',_binary '\0',_binary '','$2a$12$.Mfx0vhTiWRZL723RZD4.uROZM6QVKpYJ4ZM.JSuc54IJVMz7rJAi','thienlb',NULL);
/*!40000 ALTER TABLE `app_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_users_roles`
--

DROP TABLE IF EXISTS `app_users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_users_roles` (
  `app_users_id` varchar(255) NOT NULL,
  `roles_id` bigint NOT NULL,
  PRIMARY KEY (`app_users_id`,`roles_id`),
  KEY `FK50rx9039q80b79jxbj6hja21k` (`roles_id`),
  CONSTRAINT `FK50rx9039q80b79jxbj6hja21k` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKq6q5rwvnm2uhejy6i07et8iv7` FOREIGN KEY (`app_users_id`) REFERENCES `app_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_users_roles`
--

LOCK TABLES `app_users_roles` WRITE;
/*!40000 ALTER TABLE `app_users_roles` DISABLE KEYS */;
INSERT INTO `app_users_roles` VALUES ('159c674c-d64c-4649-abc0-68564e05dfa0',1),('17bab4b8-c4cd-44f4-a86a-1cd50cfa4925',2),('2005eb90-dd59-402a-95a3-7618d02bf4f3',2),('3e716bc9-4d44-4223-955a-89ed1b3bdeb1',2),('3ebcc654-ecee-4208-9a62-7338d74f9586',2),('65a0ab5b-00ea-4e35-9e56-8c1d39399800',2),('8a3dfcee-41c8-4050-bd42-88c730869e32',2),('9b2d3f71-94f5-4c47-90e4-be30a96cf433',2),('d8a064d6-a795-480c-9189-7d6b2c89e8c5',2),('e407890e-fcab-41ec-84b0-ce9c033bddb9',2),('f3ea6f0b-bbdc-4652-a43b-1ef78e593436',2),('06a7978d-ad4a-4b96-95d2-271bd641caa9',3),('08459377-63c5-4794-b69c-f665ecf00c8a',3),('1b6e8b65-086d-4ea7-bf7d-3dc68e58357a',3),('39f5d3a8-5d5c-4001-b993-c84017cec464',3),('484700e8-56da-4e4f-b904-82cc23c4bd93',3),('4f35902c-af4e-4a81-bc3d-23be5d48d110',3),('59046fe6-ebe1-4709-99ae-6e531421f7bd',3),('5d785d81-1b41-44bd-af58-bebcf528e7fe',3),('d20699c6-567a-4cb7-85b4-1098ec27a509',3),('d6b9af98-e03d-46a7-bc58-29d1e76a8df2',3);
/*!40000 ALTER TABLE `app_users_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_seq`
--

DROP TABLE IF EXISTS `customer_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_seq`
--

LOCK TABLES `customer_seq` WRITE;
/*!40000 ALTER TABLE `customer_seq` DISABLE KEYS */;
INSERT INTO `customer_seq` VALUES (1);
/*!40000 ALTER TABLE `customer_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `id_card` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `app_user_id` varchar(255) DEFAULT NULL,
  `image_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKefl3qvueuf69ppfowmkjnklxf` (`app_user_id`),
  KEY `FK4jm28ab7o005x0fpk1aowrjrj` (`image_id`),
  CONSTRAINT `FK4jm28ab7o005x0fpk1aowrjrj` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`),
  CONSTRAINT `FKefl3qvueuf69ppfowmkjnklxf` FOREIGN KEY (`app_user_id`) REFERENCES `app_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('KH-1002','Quảng Nam','2000-02-04',_binary '\0','dat@gmail.com',0,'197241502','Nguyễn Văn Đạt','0907123456','1b6e8b65-086d-4ea7-bf7d-3dc68e58357a',NULL),('KH-1003','Hồ Chí Minh','1990-04-11',_binary '\0','thanhtruc@gmail.com',1,'197241502','Hoàng Thanh Trúc','0902345263','d6b9af98-e03d-46a7-bc58-29d1e76a8df2',NULL),('KH-1004','Hà Nội','1994-09-16',_binary '\0','ngocnhat@gmail.com',0,'197241502','Võ Ngọc Nhật','0907123123','5d785d81-1b41-44bd-af58-bebcf528e7fe',NULL),('KH-1005','Cần Thơ','1996-12-12',_binary '\0','phuocduc@gmail.com',0,'197241502','Phan Phước Đức','0902312221','d20699c6-567a-4cb7-85b4-1098ec27a509',NULL),('KH-1006','Huế','1889-05-10',_binary '\0','hoangthien@gmail.com',0,'197241502','Mai Hoàng Thiện','0909123897','06a7978d-ad4a-4b96-95d2-271bd641caa9',NULL),('KH-1007','Quảng Trị','2002-02-28',_binary '\0','thaovi@gmail.com',1,'197241502','Nguyễn Thị Thảo Vi','0907129873','39f5d3a8-5d5c-4001-b993-c84017cec464',NULL),('KH-1008','Quảng Bình','1987-07-24',_binary '\0','tuanhuynh@gmail.com',0,'197241502','Huỳnh Tuấn','0934123987','59046fe6-ebe1-4709-99ae-6e531421f7bd',NULL),('KH-1009','Bình Định','1995-03-12',_binary '\0','bichtram@gmail.com',1,'197241502','Ngô Thị Bích Trâm','0923876982','08459377-63c5-4794-b69c-f665ecf00c8a',NULL),('KH-1010','Phú Yên','1993-09-09',_binary '\0','nhatminh@gmail.com',0,'197241502','Phan Nhật Minh','0905888999','4f35902c-af4e-4a81-bc3d-23be5d48d110',NULL),('KH-1011','Đà Nẵng','1997-02-12',_binary '\0','quoctung@gmail.com',0,'197241502','Lê Quốc Tùng','0905123321','484700e8-56da-4e4f-b904-82cc23c4bd93',NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `degrees`
--

DROP TABLE IF EXISTS `degrees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `degrees` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degrees`
--

LOCK TABLES `degrees` WRITE;
/*!40000 ALTER TABLE `degrees` DISABLE KEYS */;
INSERT INTO `degrees` VALUES (1,'Trung Cấp'),(2,'Cao Đẳng'),(3,'Đại Học'),(4,'Sau Đại Học');
/*!40000 ALTER TABLE `degrees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directions`
--

DROP TABLE IF EXISTS `directions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `directions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directions`
--

LOCK TABLES `directions` WRITE;
/*!40000 ALTER TABLE `directions` DISABLE KEYS */;
INSERT INTO `directions` VALUES (1,'Đông'),(2,'Đông Nam'),(3,'Đông Bắc'),(4,'Tây'),(5,'Tây Nam'),(6,'Tây Bắc'),(7,'Nam'),(8,'Bắc');
/*!40000 ALTER TABLE `directions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_seq`
--

DROP TABLE IF EXISTS `employee_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_seq`
--

LOCK TABLES `employee_seq` WRITE;
/*!40000 ALTER TABLE `employee_seq` DISABLE KEYS */;
INSERT INTO `employee_seq` VALUES (1);
/*!40000 ALTER TABLE `employee_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `id_card` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `app_user_id` varchar(255) DEFAULT NULL,
  `degree_id` bigint DEFAULT NULL,
  `image_id` bigint DEFAULT NULL,
  `position_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtpmj1ush3grct5mjdfjs9jx61` (`app_user_id`),
  KEY `FK2q8p3e6omopci40y8vp2hh2xk` (`degree_id`),
  KEY `FKbt9e37riyf0i1au4g2l6rkuge` (`image_id`),
  KEY `FKngcpgx7fx5kednw3m7u0u8of3` (`position_id`),
  CONSTRAINT `FK2q8p3e6omopci40y8vp2hh2xk` FOREIGN KEY (`degree_id`) REFERENCES `degrees` (`id`),
  CONSTRAINT `FKbt9e37riyf0i1au4g2l6rkuge` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`),
  CONSTRAINT `FKngcpgx7fx5kednw3m7u0u8of3` FOREIGN KEY (`position_id`) REFERENCES `positions` (`id`),
  CONSTRAINT `FKtpmj1ush3grct5mjdfjs9jx61` FOREIGN KEY (`app_user_id`) REFERENCES `app_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES ('NV-1001','Đà Nẵng','1998-10-30',_binary '\0','quoctung@gmail.com',1,'197241502','Lê Quốc Tùng','0911111111','159c674c-d64c-4649-abc0-68564e05dfa0',1,1,1),('NV-1002','Huế','1988-10-30',_binary '\0','bichphuong12@gmail.com',0,'197241502','Mai Thị Bích Phương','0911111111','3ebcc654-ecee-4208-9a62-7338d74f9586',1,1,1),('NV-1003','Quảng Trị','1989-12-30',_binary '\0','nam31@gmail.com',1,'197241502','Nguyễn Văn Nam','0911111111','2005eb90-dd59-402a-95a3-7618d02bf4f3',3,2,1),('NV-1004','Quảng Ngãi','1992-04-30',_binary '\0','phamkhoa22@gmail.com',1,'197241502','Phạm Khoa','0911111111','9b2d3f71-94f5-4c47-90e4-be30a96cf433',2,1,1),('NV-1005','Cần Thơ','1995-12-12',_binary '\0','nhatvuong11@gmail.com',1,'197241502','Phạm Khoa','0911111111','17bab4b8-c4cd-44f4-a86a-1cd50cfa4925',2,1,1),('NV-1006','Quảng Bình','1997-04-12',_binary '\0','hathu27@gmail.com',0,'197241502','Trương Thị Hà Thư','0911111111','65a0ab5b-00ea-4e35-9e56-8c1d39399800',1,1,1),('NV-1007','Vũng Tàu','1999-04-19',_binary '\0','ainhu87@gmail.com',0,'197241502','Lê Ái Như','0911111111','8a3dfcee-41c8-4050-bd42-88c730869e32',1,1,1),('NV-1008','Quảng Ngãi','1998-04-01',_binary '\0','thinhhoang12@gmail.com',1,'197241502','Lê Phước Thịnh','0911111111','f3ea6f0b-bbdc-4652-a43b-1ef78e593436',3,2,1),('NV-1009','Quảng Nam','1998-04-01',_binary '\0','dung23@gmail.com',1,'197241502','Lê Văn Dũng','0911111111','3e716bc9-4d44-4223-955a-89ed1b3bdeb1',3,2,1),('NV-1010','Hà Nội','1998-04-01',_binary '\0','thidiem@gmail.com',1,'197241502','Đoàn Thị Điểm','0911111111','e407890e-fcab-41ec-84b0-ce9c033bddb9',3,2,1),('NV-1011','Quảng Ngãi','1998-04-01',_binary '\0','vanson@gmail.com',1,'197241502','Lê Văn Sơn','0911111111','d8a064d6-a795-480c-9189-7d6b2c89e8c5',3,2,1);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://cdyduochopluc.edu.vn/wp-content/uploads/2019/07/anh-dai-dien-FB-200-1.jpg'),(2,'https://cdn.nap.edu.vn/avatar/202192/trend-avatar-facebook-1-1630566628626.jpg'),(3,'https://file4.batdongsan.com.vn/crop/257x147/2021/11/28/20211128220348-1a17_wm.jpg'),(4,'https://file4.batdongsan.com.vn/crop/257x147/2022/01/04/20220104095042-13c2_wm.jpg'),(5,'https://file4.batdongsan.com.vn/crop/257x147/2020/03/17/20200317102146-f05d_wm.jpg'),(6,'https://file4.batdongsan.com.vn/crop/257x147/2022/01/14/20220114163532-f5e4_wm.jpg'),(7,'https://file4.batdongsan.com.vn/crop/257x147/2021/12/22/20211222163505-ecad_wm.jpg'),(8,'https://file4.batdongsan.com.vn/crop/257x147/2020/07/18/20200718122425-1bef_wm.jpg'),(9,'https://file4.batdongsan.com.vn/crop/260x146/2021/06/13/20210613155351-c517.jpg'),(10,'https://file4.batdongsan.com.vn/crop/260x146/2021/12/08/20211208165329-3714.jpg'),(11,'https://file4.batdongsan.com.vn/crop/354x200/2022/01/11/wxbwknn6/20220111162607-84e4.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `positions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES (1,'Nhân Viên'),(2,'Kế Toán'),(3,'Chuyên Viên'),(4,'Trưởng Phòng'),(5,'Giám Đốc');
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `real_estate_news`
--

DROP TABLE IF EXISTS `real_estate_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `real_estate_news` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `approval` tinyint DEFAULT NULL,
  `area` double DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `kind_of_news` tinyint DEFAULT NULL,
  `price` double DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `customer_id` varchar(255) DEFAULT NULL,
  `direction_id` bigint DEFAULT NULL,
  `real_estate_type_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKev5j2ys5h3up1y6epuoer3xy4` (`customer_id`),
  KEY `FKpg8g74in40uxkyfi4ohdgrt3h` (`direction_id`),
  KEY `FK8l79ql7rc1wnc712gifptvhhs` (`real_estate_type_id`),
  CONSTRAINT `FK8l79ql7rc1wnc712gifptvhhs` FOREIGN KEY (`real_estate_type_id`) REFERENCES `real_estate_type` (`id`),
  CONSTRAINT `FKev5j2ys5h3up1y6epuoer3xy4` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `FKpg8g74in40uxkyfi4ohdgrt3h` FOREIGN KEY (`direction_id`) REFERENCES `directions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `real_estate_news`
--

LOCK TABLES `real_estate_news` WRITE;
/*!40000 ALTER TABLE `real_estate_news` DISABLE KEYS */;
INSERT INTO `real_estate_news` VALUES ('BD-1001','Đường 2/9, Phường Hòa Cường Bắc, Hải Châu, Đà Nẵng',1,100,'Chính chủ cần bán cặp đất mặt tiền đường 2/9, trục đường chính của thành phố Đà Nẵng,\n  Nằm trong cụm khai thác tổ hợp khách sạn, du lịch, văn phòng cho thuê...\n  Đối diện khu thương mại tổ hợp dịch vụ du lịch bậc nhất Đà Nẵng.',1,15000000000,1,'BÁN GẤP CẶP ĐẤT ĐƯỜNG 2/9','KH-1002',1,1),('BD-1002','Nguyễn Hữu Thọ, Thanh Khê, Đà Nẵng',1,100,'Bán đất nền trung tâm thành phố, Đường rộng, mặt tiền gần sân bay gần trung tâm',1,15000000000,1,'Bán đất mặt tiền Nguyễn Hữu Thọ','KH-1002',4,1),('BD-1003','Hòa Xuân, Đà Nẵng',1,100,'Sở hữu vị trí trung tâm của trung tâm thành phố Đà Nẵng',1,4000000000,1,'Bán lô góc Hòa Xuân giá rẻ','KH-1003',3,1),('BD-1004','Đường Nại Nam, Phường Hòa Cường Bắc, Hải Châu, Đà Nẵng',1,100,'Chính chủ cần bán gấp căn nhà phố ngay trung tâm Đà Nẵng - Cạnh siêu thị Lotte mart.\nNhà phố thương mại, đồng bộ mặt ngoài giúp cho dãy phố sang trọng, khác biệt với các khu phố hiện trạng tại Đà Nẵng.',1,400000000,1,'NHÀ PHỐ 4 TẦNG CẠNH LOTTE MART','KH-1003',3,2),('BD-1005','Đường Bạch Đằng, Phường Hòa Thuận Đông, Hải Châu, Đà Nẵng',1,100,'Chính chủ cần bán gấp căn nhà phố ngay trung tâm Đà Nẵng - Cạnh siêu thị Lotte mart.\nNhà phố thương mại, đồng bộ mặt ngoài giúp cho dãy phố sang trọng, khác biệt với các khu phố hiện trạng tại Đà Nẵng.',1,8000000000,1,'CẦN BÁN LÔ ĐẤT MẶT TIỀN ĐƯỜNG BẠCH ĐẰNG','KH-1004',1,2),('BD-1006','Bán căn hộ chung cư tại HaDo Centrosa Garden - Quận 10 - Hồ Chí Minh',1,100,'Cần bán căn hộ Hà Đô Centrosa Garden, Q10:\n- Căn 2pn loại 86m2.\n- Lầu 6 trở lên.\n- Theo giá thị trường. (6 - 6,3 tỷ).',1,13000000,1,'Cần mua Hà Đô Centrosa căn 2pn','KH-1005',1,2),('BD-1007','Bán căn hộ chung cư tại Quận Nam Từ Liêm - Hà Nội',1,100,'- Loanh quanh bán kính 1 - 2km so với Nguyễn Văn Giáp, Hàm Nghi, Vinhome Gardenia, Lê Đức Thọ, Trần Hữu Dực:\n- Không cần mới nhưng không bàn giao cũ quá 10 năm.\n- Có quỹ bảo trì của ban quản trị.\n- Loanh quanh 2 tỷ.',1,13000000,1,'Cần bán chung cư cũ 2 - 3 PN','KH-1005',1,2),('BD-1008','Xã Ngọc Thanh - Thành phố Phúc Yên - Vĩnh Phúc',1,1000,'Hiện tại mình đang muốn cho thuê đất tại khu vực Đại Lải, Phúc Yên.\nDiện tích 1000m2. View hồ hoặc trong khu đô thị, full thổ cư.\nGiá từ 10 - 15 tỷ.',2,150000000,1,'Cho thuê đất khu vực Đại Lải, Phúc Yên, Vĩnh Phúc','KH-1006',1,1),('BD-1009','Phường An Hòa - Thành phố Biên Hòa - Đồng Nai',1,100,'Hiện tại tôi đang có một số khách đầu tư cần bán đất khu vực P. An Hòa.\nDiện tích từ 60m2 đổ lên, nằm trên đường giao thông thuận tiện,\nkhông dính quy hoạch. Đất có thổ cư',2,1300000,1,'Cần thuê đất phường An Hoà','KH-1007',1,2),('BD-1010','Quận 2, Thành phố Thủ Đức - Hồ Chí Minh',1,100,'Nguồn khách có nhu cầu bán đất nhà phố biệt thự ở kinh doanh và đầu tư khu vực quận 2,\ntp Thủ Đức. Các phường Bình An, An Phú An Khánh, Thảo điền. Diện tích 5x20m, 8x20m, 10x20m,\n 20x20m hoặc lớn hơn hoặc đất biệt thự 500 đến 600m2 hoặc nhà mới đẹp...',2,1300000000,1,'Cần mua đất nhà phố biệt thự quận 2, tp Thủ Đức','KH-1009',6,1),('BD-1011','Trần Phú, Hải Châu, Đà Nẵng',1,200,'Sở hữu vị trí trung tâm của trung tâm thành phố Đà Nẵng',2,450000000,1,'MẶT BẰNG ĐƯỜNG TRẦN PHÚ-BẠCH ĐẰNG','KH-1003',2,2);
/*!40000 ALTER TABLE `real_estate_news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `real_estate_news_image_list`
--

DROP TABLE IF EXISTS `real_estate_news_image_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `real_estate_news_image_list` (
  `real_estate_news_id` varchar(255) NOT NULL,
  `image_list_id` bigint NOT NULL,
  UNIQUE KEY `UK_4fbgw4i47xad6bglndm3d03od` (`image_list_id`),
  KEY `FKnrifcb08d7uf7mbballx26xfo` (`real_estate_news_id`),
  CONSTRAINT `FKdyr90e3rhih566dji1gibgx5u` FOREIGN KEY (`image_list_id`) REFERENCES `images` (`id`),
  CONSTRAINT `FKnrifcb08d7uf7mbballx26xfo` FOREIGN KEY (`real_estate_news_id`) REFERENCES `real_estate_news` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `real_estate_news_image_list`
--

LOCK TABLES `real_estate_news_image_list` WRITE;
/*!40000 ALTER TABLE `real_estate_news_image_list` DISABLE KEYS */;
INSERT INTO `real_estate_news_image_list` VALUES ('BD-1002',11),('BD-1003',3),('BD-1004',4),('BD-1005',5),('BD-1006',6),('BD-1007',7),('BD-1008',8),('BD-1009',9),('BD-1011',10);
/*!40000 ALTER TABLE `real_estate_news_image_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `real_estate_news_seq`
--

DROP TABLE IF EXISTS `real_estate_news_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `real_estate_news_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `real_estate_news_seq`
--

LOCK TABLES `real_estate_news_seq` WRITE;
/*!40000 ALTER TABLE `real_estate_news_seq` DISABLE KEYS */;
INSERT INTO `real_estate_news_seq` VALUES (1);
/*!40000 ALTER TABLE `real_estate_news_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `real_estate_type`
--

DROP TABLE IF EXISTS `real_estate_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `real_estate_type` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `real_estate_type`
--

LOCK TABLES `real_estate_type` WRITE;
/*!40000 ALTER TABLE `real_estate_type` DISABLE KEYS */;
INSERT INTO `real_estate_type` VALUES (1,'Đất'),(2,'Nhà ở');
/*!40000 ALTER TABLE `real_estate_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_EMPLOYEE'),(3,'ROLE_CUSTOMER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-18 11:51:46
