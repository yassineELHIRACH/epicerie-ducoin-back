DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` text,
  `price` int(10) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `quantity` int(100) NOT NULL,
  `basket` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `type`, `title`, `description`, `price`, `image`, `quantity`, `basket`) VALUES
(1, 'Boisson', 'Coca Cola', 'Coca Cola classique 2L', 2, 'https://www.sushi-lauv.fr/wp-content/uploads/2017/10/cocacola.png', 100, NULL),
(2, 'sandwicherie', 'Panini', 'Panini cordon bleu crudités', 4, 'https://www.fifteenspatulas.com/wp-content/uploads/2015/01/Chicken-Cordon-Bleu-Panini-Fifteen-Spatulas-1.jpg', 50, NULL),
(3, 'Menager', 'Balais', 'Balais 1m50 avec multiple accessoires', 25, 'https://img.grouponcdn.com/deal/22tzs8fNozk6etUKHQbgcaPyy9Ci/22-2048x1229/v1/t600x362.jpg', 10, NULL);
COMMIT;