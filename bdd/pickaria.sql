-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 27 oct. 2021 à 16:23
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pickaria`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `ID` int(11) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Contenu` varchar(2000) NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`ID`, `Nom`, `Contenu`, `Date`) VALUES
(1, 'Nouveau site !', 'Pickaria s\'équipe enfin d\'un site web !\r\nVous y trouverez ses news et annonces tout au long de l\'aventure !', '2021-10-27 15:36:54'),
(2, 'Version précédente', 'Pickaria ne date pas d\'aujourd\'hui mais bien d\'hier ! Le serveur était présent dès la 1.11 pour ses premières versions où il était encore un serveur privé d\'amis voulant s\'amuser', '2021-10-27 16:15:28'),
(3, 'Streamer', 'N\'oubliez-pas ! Vous avez le droit de faire des lives sur le serveur, cela poussera peut-être des gens a nous rejoindre ! Si vous voulez pouvoir afficher des infos a propos du serveur sur vos LiveStream n\'hésitez-pas à nous contacter a #email, nous serions heureux d\'apprendre à vous connaitre et de pouvoir ', '2021-10-27 16:17:45'),
(4, 'Contactez-nous', 'Si vous avez des retours, des questions ou des suggestion n\'hésitez-pas ! Contactez nous à #email.', '2021-10-27 16:19:57'),
(5, 'Alinaa99 et Quozul', 'Le staff est heureux de vous accueillir de nouveau sur pickaria pour de nouvelles aventures ! n\'hésitez-pas a venir vous amusez avec nous, nous vous attendons avec des nouveautés !', '2021-10-27 16:20:38');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
