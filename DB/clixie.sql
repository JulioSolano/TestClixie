-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-01-2020 a las 19:50:11
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clixie`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
CREATE TABLE IF NOT EXISTS `ordenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `items` varchar(255) NOT NULL,
  `idRestaurante` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillos`
--

DROP TABLE IF EXISTS `platillos`;
CREATE TABLE IF NOT EXISTS `platillos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `categoria` varchar(25) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `precio` varchar(10) NOT NULL,
  `urlFoto` varchar(255) NOT NULL,
  `idRestaurante` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `platillos`
--

INSERT INTO `platillos` (`id`, `nombre`, `categoria`, `descripcion`, `precio`, `urlFoto`, `idRestaurante`) VALUES
(1, 'Sandwichón de atún', 'entradas', 'El sandwichón de atún es una preparación que puedes servir como entrada, botana o incluir en el lunch de los pequeños.', '80.00', '../../../assets/sandwichonAtun.jpg', 1),
(2, 'Chiles jalapeños rellenos de atún', 'entradas', 'Le puedes agregar vino blanco al atún y dejarlo reposar. Esto le dará un toque distinto y tendrás dos recetas en una.', '90.00', '../../../assets/salpicon_de_cerdo.jpeg', 1),
(3, 'Ensalada Waldorf', 'sopas y ensaladas', 'Prueba esta ensalada que fue creada en el famoso hotel Waldorf Astoria, de Nueva York, por Oscar Tschirky en el año de 1893.', '130.00', '../../../assets/salpicon_de_cerdo.jpeg', 1),
(4, 'Gelatina de coco', 'postres', 'Prepara este postre sin complicaciones y cierra con broche de oro uno de tus menús diarios.', '55.00', '../../../assets/salpicon_de_cerdo.jpeg', 1),
(5, 'Agua de limón con hierbabuena', 'bebidas', 'Agrega un sabor adicional a tu agua de limón con una infusión de té… ¿qué tal la hierbabuena?', '40.00', '../../../assets/salpicon_de_cerdo.jpeg', 1),
(6, 'Piñada', 'bebidas', 'Combina piña, coco y leche para obtener una refrescante bebida de temporada.', '50.00', '../../../assets/salpicon_de_cerdo.jpeg', 2),
(7, 'Ensalada de col y zanahoria', 'sopas y ensaladas', 'Utiliza las capas de col como bowl y rellénalas de una fresca ensalada de col con zanahoria.', '115.00', '../../../assets/salpicon_de_cerdo.jpeg', 2),
(8, 'Caldo Xóchitl', 'sopas y ensaladas', 'Uno de los caldos más sencillos y típicos que puedes encontrar en un restaurante mexicano', '125.00', '../../../assets/salpicon_de_cerdo.jpeg', 2),
(9, 'Pay helado de limón', 'postres', 'Sin duda un cítrico y dulce final que no te querrás perder después de la comida.', '35.00', '../../../assets/salpicon_de_cerdo.jpeg', 2),
(10, 'Agua de piña con alfalfa', 'bebidas', 'Tomar agua de frutas de la estación durante la comida es una manera de absorber este tipo de nutrientes de forma sana.', '45.00', '../../../assets/salpicon_de_cerdo.jpeg', 2),
(11, 'Salpicón de cerdo', 'sopas y ensaladas', 'Este delicioso salpicón de cerdo, además de servirse como ensalada, también se puede acompañar de tostadas.', '95.00', '../../../assets/salpicon_de_cerdo.jpeg', 3),
(12, 'Flan de Elote', 'postres', 'Una opción más para utilizar el elote en platillos dulces. Sencillamente delicioso.', '45.00', '../../../assets/flan_de_elote.jpg', 3),
(13, 'Agua de avena con moras', 'bebidas', 'Acompaña tus comidas con esta rica y nutritiva agua de avena con moras.', '30.00', '../../../assets/agua_de_avena_con_moras.jpg', 3),
(15, 'Tiras de pescado rebozado', 'entradas', 'Acompaña a los deliciosos pescados con unas gotas de limón y salsa picante. El menú ideal para la cuaresma.', '65.00', '../../../assets/tiras_de_pescado.jpg', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurantes`
--

DROP TABLE IF EXISTS `restaurantes`;
CREATE TABLE IF NOT EXISTS `restaurantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `logo` varchar(150) NOT NULL,
  `direccion` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `restaurantes`
--

INSERT INTO `restaurantes` (`id`, `nombre`, `descripcion`, `telefono`, `logo`, `direccion`) VALUES
(1, 'Le restaurante', 'la comida como en casa', '6862226358', '../../../assets/restaurant1.png', 'Calle cuauhtémoc#1402, Col Matamoros'),
(2, 'Le Fonde', 'comes como en casa sin lavar los platos', '8262625983', '../../../assets/restaurant2.png', 'paseo de los leones #203 fraccionamiento santa fe Montemorelos Nuevo Leon'),
(3, 'Le locale', 'Come sin convertirte en una planta', '8261009340', '../../../assets/restaurant3.png', 'Kingsfor Dr #7225 Indianapolis IN'),
(5, 'Le pueste', 'comida rapida para una hambre feroz', '8262629258', '../../../assets/restaurant4.png', 'cristopher LN #3002 Indianapolis IN');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
