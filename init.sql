DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `basketId` int(11) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a07548afc4adc3667e609c3f5ce` (`basketId`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `price`, `description`, `image`, `quantity`, `basketId`, `type`, `title`) VALUES
(1, 2, 'Coca cola classique 2L', 'https://www.sushi-lauv.fr/wp-content/uploads/2017/10/cocacola.png', 50, NULL, 'Boisson', 'Coca Cola'),
(2, 4, 'Panini cordon bleu crudités', 'https://www.fifteenspatulas.com/wp-content/uploads/2015/01/Chicken-Cordon-Bleu-Panini-Fifteen-Spatulas-1.jpg', 10, NULL, 'Sandwicherie', 'Panini'),
(3, 25, 'Balais 1m50 avec multiple accessoires', 'https://img.grouponcdn.com/deal/22tzs8fNozk6etUKHQbgcaPyy9Ci/22-2048x1229/v1/t600x362.jpg', 10, NULL, 'Menager', 'Balais');
COMMIT;