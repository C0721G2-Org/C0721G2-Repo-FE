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
INSERT INTO `customers` VALUES ('KH-1002','Qu???ng Nam','2000-02-04',_binary '\0','dat@gmail.com',0,'197241502','Nguy???n V??n ?????t','0907123456','1b6e8b65-086d-4ea7-bf7d-3dc68e58357a',NULL),('KH-1003','H??? Ch?? Minh','1990-04-11',_binary '\0','thanhtruc@gmail.com',1,'197241502','Ho??ng Thanh Tr??c','0902345263','d6b9af98-e03d-46a7-bc58-29d1e76a8df2',NULL),('KH-1004','H?? N???i','1994-09-16',_binary '\0','ngocnhat@gmail.com',0,'197241502','V?? Ng???c Nh???t','0907123123','5d785d81-1b41-44bd-af58-bebcf528e7fe',NULL),('KH-1005','C???n Th??','1996-12-12',_binary '\0','phuocduc@gmail.com',0,'197241502','Phan Ph?????c ?????c','0902312221','d20699c6-567a-4cb7-85b4-1098ec27a509',NULL),('KH-1006','Hu???','1889-05-10',_binary '\0','hoangthien@gmail.com',0,'197241502','Mai Ho??ng Thi???n','0909123897','06a7978d-ad4a-4b96-95d2-271bd641caa9',NULL),('KH-1007','Qu???ng Tr???','2002-02-28',_binary '\0','thaovi@gmail.com',1,'197241502','Nguy???n Th??? Th???o Vi','0907129873','39f5d3a8-5d5c-4001-b993-c84017cec464',NULL),('KH-1008','Qu???ng B??nh','1987-07-24',_binary '\0','tuanhuynh@gmail.com',0,'197241502','Hu???nh Tu???n','0934123987','59046fe6-ebe1-4709-99ae-6e531421f7bd',NULL),('KH-1009','B??nh ?????nh','1995-03-12',_binary '\0','bichtram@gmail.com',1,'197241502','Ng?? Th??? B??ch Tr??m','0923876982','08459377-63c5-4794-b69c-f665ecf00c8a',NULL),('KH-1010','Ph?? Y??n','1993-09-09',_binary '\0','nhatminh@gmail.com',0,'197241502','Phan Nh???t Minh','0905888999','4f35902c-af4e-4a81-bc3d-23be5d48d110',NULL),('KH-1011','???? N???ng','1997-02-12',_binary '\0','quoctung@gmail.com',0,'197241502','L?? Qu???c T??ng','0905123321','484700e8-56da-4e4f-b904-82cc23c4bd93',NULL);
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
INSERT INTO `degrees` VALUES (1,'Trung C???p'),(2,'Cao ?????ng'),(3,'?????i H???c'),(4,'Sau ?????i H???c');
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
INSERT INTO `directions` VALUES (1,'????ng'),(2,'????ng Nam'),(3,'????ng B???c'),(4,'T??y'),(5,'T??y Nam'),(6,'T??y B???c'),(7,'Nam'),(8,'B???c');
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
INSERT INTO `employees` VALUES ('NV-1001','???? N???ng','1998-10-30',_binary '\0','quoctung@gmail.com',1,'197241502','L?? Qu???c T??ng','0911111111','159c674c-d64c-4649-abc0-68564e05dfa0',1,1,1),('NV-1002','Hu???','1988-10-30',_binary '\0','bichphuong12@gmail.com',0,'197241502','Mai Th??? B??ch Ph????ng','0911111111','3ebcc654-ecee-4208-9a62-7338d74f9586',1,1,1),('NV-1003','Qu???ng Tr???','1989-12-30',_binary '\0','nam31@gmail.com',1,'197241502','Nguy???n V??n Nam','0911111111','2005eb90-dd59-402a-95a3-7618d02bf4f3',3,2,1),('NV-1004','Qu???ng Ng??i','1992-04-30',_binary '\0','phamkhoa22@gmail.com',1,'197241502','Ph???m Khoa','0911111111','9b2d3f71-94f5-4c47-90e4-be30a96cf433',2,1,1),('NV-1005','C???n Th??','1995-12-12',_binary '\0','nhatvuong11@gmail.com',1,'197241502','Ph???m Khoa','0911111111','17bab4b8-c4cd-44f4-a86a-1cd50cfa4925',2,1,1),('NV-1006','Qu???ng B??nh','1997-04-12',_binary '\0','hathu27@gmail.com',0,'197241502','Tr????ng Th??? H?? Th??','0911111111','65a0ab5b-00ea-4e35-9e56-8c1d39399800',1,1,1),('NV-1007','V??ng T??u','1999-04-19',_binary '\0','ainhu87@gmail.com',0,'197241502','L?? ??i Nh??','0911111111','8a3dfcee-41c8-4050-bd42-88c730869e32',1,1,1),('NV-1008','Qu???ng Ng??i','1998-04-01',_binary '\0','thinhhoang12@gmail.com',1,'197241502','L?? Ph?????c Th???nh','0911111111','f3ea6f0b-bbdc-4652-a43b-1ef78e593436',3,2,1),('NV-1009','Qu???ng Nam','1998-04-01',_binary '\0','dung23@gmail.com',1,'197241502','L?? V??n D??ng','0911111111','3e716bc9-4d44-4223-955a-89ed1b3bdeb1',3,2,1),('NV-1010','H?? N???i','1998-04-01',_binary '\0','thidiem@gmail.com',1,'197241502','??o??n Th??? ??i???m','0911111111','e407890e-fcab-41ec-84b0-ce9c033bddb9',3,2,1),('NV-1011','Qu???ng Ng??i','1998-04-01',_binary '\0','vanson@gmail.com',1,'197241502','L?? V??n S??n','0911111111','d8a064d6-a795-480c-9189-7d6b2c89e8c5',3,2,1);
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
INSERT INTO `positions` VALUES (1,'Nh??n Vi??n'),(2,'K??? To??n'),(3,'Chuy??n Vi??n'),(4,'Tr?????ng Ph??ng'),(5,'Gi??m ?????c');
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
INSERT INTO `real_estate_news` VALUES ('BD-1001','???????ng 2/9, Ph?????ng H??a C?????ng B???c, H???i Ch??u, ???? N???ng',1,100,'Ch??nh ch??? c???n b??n c???p ?????t m???t ti???n ???????ng 2/9, tr???c ???????ng ch??nh c???a th??nh ph??? ???? N???ng,\n  N???m trong c???m khai th??c t??? h???p kh??ch s???n, du l???ch, v??n ph??ng cho thu??...\n  ?????i di???n khu th????ng m???i t??? h???p d???ch v??? du l???ch b???c nh???t ???? N???ng.',1,15000000000,1,'B??N G???P C???P ?????T ???????NG 2/9','KH-1002',1,1),('BD-1002','Nguy???n H???u Th???, Thanh Kh??, ???? N???ng',1,100,'B??n ?????t n???n trung t??m th??nh ph???, ???????ng r???ng, m???t ti???n g???n s??n bay g???n trung t??m',1,15000000000,1,'B??n ?????t m???t ti???n Nguy???n H???u Th???','KH-1002',4,1),('BD-1003','H??a Xu??n, ???? N???ng',1,100,'S??? h???u v??? tr?? trung t??m c???a trung t??m th??nh ph??? ???? N???ng',1,4000000000,1,'B??n l?? g??c H??a Xu??n gi?? r???','KH-1003',3,1),('BD-1004','???????ng N???i Nam, Ph?????ng H??a C?????ng B???c, H???i Ch??u, ???? N???ng',1,100,'Ch??nh ch??? c???n b??n g???p c??n nh?? ph??? ngay trung t??m ???? N???ng - C???nh si??u th??? Lotte mart.\nNh?? ph??? th????ng m???i, ?????ng b??? m???t ngo??i gi??p cho d??y ph??? sang tr???ng, kh??c bi???t v???i c??c khu ph??? hi???n tr???ng t???i ???? N???ng.',1,400000000,1,'NH?? PH??? 4 T???NG C???NH LOTTE MART','KH-1003',3,2),('BD-1005','???????ng B???ch ?????ng, Ph?????ng H??a Thu???n ????ng, H???i Ch??u, ???? N???ng',1,100,'Ch??nh ch??? c???n b??n g???p c??n nh?? ph??? ngay trung t??m ???? N???ng - C???nh si??u th??? Lotte mart.\nNh?? ph??? th????ng m???i, ?????ng b??? m???t ngo??i gi??p cho d??y ph??? sang tr???ng, kh??c bi???t v???i c??c khu ph??? hi???n tr???ng t???i ???? N???ng.',1,8000000000,1,'C???N B??N L?? ?????T M???T TI???N ???????NG B???CH ?????NG','KH-1004',1,2),('BD-1006','B??n c??n h??? chung c?? t???i HaDo Centrosa Garden - Qu???n 10 - H??? Ch?? Minh',1,100,'C???n b??n c??n h??? H?? ???? Centrosa Garden, Q10:\n- C??n 2pn lo???i 86m2.\n- L???u 6 tr??? l??n.\n- Theo gi?? th??? tr?????ng. (6 - 6,3 t???).',1,13000000,1,'C???n mua H?? ???? Centrosa c??n 2pn','KH-1005',1,2),('BD-1007','B??n c??n h??? chung c?? t???i Qu???n Nam T??? Li??m - H?? N???i',1,100,'- Loanh quanh b??n k??nh 1 - 2km so v???i Nguy???n V??n Gi??p, H??m Nghi, Vinhome Gardenia, L?? ?????c Th???, Tr???n H???u D???c:\n- Kh??ng c???n m???i nh??ng kh??ng b??n giao c?? qu?? 10 n??m.\n- C?? qu??? b???o tr?? c???a ban qu???n tr???.\n- Loanh quanh 2 t???.',1,13000000,1,'C???n b??n chung c?? c?? 2 - 3 PN','KH-1005',1,2),('BD-1008','X?? Ng???c Thanh - Th??nh ph??? Ph??c Y??n - V??nh Ph??c',1,1000,'Hi???n t???i m??nh ??ang mu???n cho thu?? ?????t t???i khu v???c ?????i L???i, Ph??c Y??n.\nDi???n t??ch 1000m2. View h??? ho???c trong khu ???? th???, full th??? c??.\nGi?? t??? 10 - 15 t???.',2,150000000,1,'Cho thu?? ?????t khu v???c ?????i L???i, Ph??c Y??n, V??nh Ph??c','KH-1006',1,1),('BD-1009','Ph?????ng An H??a - Th??nh ph??? Bi??n H??a - ?????ng Nai',1,100,'Hi???n t???i t??i ??ang c?? m???t s??? kh??ch ?????u t?? c???n b??n ?????t khu v???c P. An H??a.\nDi???n t??ch t??? 60m2 ????? l??n, n???m tr??n ???????ng giao th??ng thu???n ti???n,\nkh??ng d??nh quy ho???ch. ?????t c?? th??? c??',2,1300000,1,'C???n thu?? ?????t ph?????ng An Ho??','KH-1007',1,2),('BD-1010','Qu???n 2, Th??nh ph??? Th??? ?????c - H??? Ch?? Minh',1,100,'Ngu???n kh??ch c?? nhu c???u b??n ?????t nh?? ph??? bi???t th??? ??? kinh doanh v?? ?????u t?? khu v???c qu???n 2,\ntp Th??? ?????c. C??c ph?????ng B??nh An, An Ph?? An Kh??nh, Th???o ??i???n. Di???n t??ch 5x20m, 8x20m, 10x20m,\n 20x20m ho???c l???n h??n ho???c ?????t bi???t th??? 500 ?????n 600m2 ho???c nh?? m???i ?????p...',2,1300000000,1,'C???n mua ?????t nh?? ph??? bi???t th??? qu???n 2, tp Th??? ?????c','KH-1009',6,1),('BD-1011','Tr???n Ph??, H???i Ch??u, ???? N???ng',1,200,'S??? h???u v??? tr?? trung t??m c???a trung t??m th??nh ph??? ???? N???ng',2,450000000,1,'M???T B???NG ???????NG TR???N PH??-B???CH ?????NG','KH-1003',2,2);
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
INSERT INTO `real_estate_type` VALUES (1,'?????t'),(2,'Nh?? ???');
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
