CREATE DATABASE palazzos;
USE palazzos;

CREATE TABLE categorias(
	id INT PRIMARY KEY AUTO_INCREMENT,
    img TEXT,
    nombre VARCHAR(20),
    destacado Boolean,
    genero VARCHAR(20)
);

INSERT INTO categorias(img,nombre,destacado,genero) VALUES
('https://img.ltwebstatic.com/images3_pi/2022/11/26/1669419766a0941e97a68e6f9d7c33eba7fcdbdbc5_thumbnail_600x.jpg','Vestidos',true,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2021/08/27/163005271711882ebe92cd4e130a6c1da38f6c41e4_thumbnail_600x.jpg','Pantalones',true,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2021/12/15/1639538960b8a399cc16ad581ee3c7346177d7e829_thumbnail_600x.jpg','Blusas',true,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2022/07/28/1658979444749a5a1040bb3b2c9d733d9c91102697_thumbnail_600x.jpg','Shorts',true,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/03/17/167902736799212b9d77f2a3cc7df12673ec69d38e_thumbnail_600x.jpg','Faldas',true,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/03/15/1678843499d2ca72d20bec622484b22d52a9883f6f_thumbnail_600x.jpg',"Palazzo's",true,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2022/08/30/166185790155a65f3a8a9021b3c8dc6de4a25e0c5a_thumbnail_600x.jpg','Pijamas',true,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/04/10/1681141022dde8a4a33fe613db460a3cbae3d38e81_thumbnail_600x.jpg','Swimwear',false,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/01/31/16751557638e13a3382da5d0a9ccdf3b23179cce75_thumbnail_600x.jpg','Denim',false,'mujer'),
('https://img.ltwebstatic.com/gspCenter/goodsImage/2023/3/27/4954191207_1063795/3B7B1E1C050284AFEAABE97BCDC2C488_thumbnail_600x.jpg','Mochilas',false,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/02/16/1676507227d757603ff0e44825ea40921464952d3a_thumbnail_600x.jpg','Calcetines',false,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/04/06/16807885212a35d3fc8afd637640c72e12bd4a95f9_thumbnail_600x.jpg','Anillos',false,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2022/12/27/1672117513cd834c77fb3aaf7ab539aac9a51eac28_thumbnail_600x.jpg','Zapatos',false,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/02/10/1676019136b9ecce561464dfb7a9214c7df9fadbbb_thumbnail_600x.jpg','Relojes',false,'mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/03/28/1679966654a931e65a44eccb096238bc40499a9d90_thumbnail_600x.jpg','Camisas',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2021/08/27/163005271711882ebe92cd4e130a6c1da38f6c41e4_thumbnail_600x.jpg','Pantalones',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/01/09/167325323376bf934c14eecd0abeacdaf6ffef8f5c_thumbnail_600x.jpg','Oversize',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2022/12/02/1669964460ccd7c0ab64f1dfbaceccaa3231ec1f41_thumbnail_600x.jpg','Top tank',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_600x.jpg','Hoodies',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2022/04/27/1651056595c14642f9d1e0ab27e3b170fec9db082f_thumbnail_600x.jpg','Shorts',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/05/04/16831661633580798265dd050049f3f75a862796af_thumbnail_600x.jpg','Pijamas',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2022/12/13/16709023366451daa4a1322cab03006e1c67d311db_thumbnail_600x.jpg','Swimwear',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2021/10/19/163462638440cd4fc66db00c951accb3dabad5feea_thumbnail_600x.jpg','Denim',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2022/09/02/166210785062f36a63bcecd00693783c4b6cd0c2a2_thumbnail_600x.jpg','Mochilas',false,'hombre'),
('https://img.ltwebstatic.com/images3_spmp/2023/06/11/1686469535934031354180e6e9a13f910cdcda3ca9_thumbnail_600x.jpg','Calcetas',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2022/12/06/167030985580fbee8c6747f34d84dcefa2545ddf14_thumbnail_600x.jpg','Anillos',false,'hombre'),
('https://sothebys-com.brightspotcdn.com/74/4b/c870adbb42518f2425bdb24c845b/09229000-3a9b-4cfc-b772-ce0f0241251b.jpeg','Zapatos',false,'hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/01/17/167396357880ae437fe84cba0ad2b4404e8b90eaca_thumbnail_600x.webp','Relojes',false,'hombre');

SELECT * FROM categorias WHERE destacado = true;
SELECT * FROM categorias WHERE genero = 'mujer';

CREATE TABLE ventas_flash(
	id INT PRIMARY KEY AUTO_INCREMENT,
    img TEXT
);

INSERT INTO ventas_flash(img) VALUES
('https://img.ltwebstatic.com/images3_pi/2023/05/15/1684119428eac746a482c4b119235cb827cd9bb436_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/04/20/168198430294e7ce7e205ad791793a05c34bcdd501_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/05/15/16841157595f5719df4339c110ee6f5359b39cc4cd_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/05/16/1684201756aee87c3551cd6e84ca046cb4310b6f03_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/05/23/16848130850d86d1a981c1e109562196a7877d7a9c_thumbnail_600x.jpg'),

('https://img.ltwebstatic.com/images3_pi/2023/05/22/16847228015dd480c8962532cb1b0ba7665343b776_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/05/31/16855001065af3210d688d20ab296bfafdbe39aa70_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/05/03/1683086420b94e47cd1153f60e98e00f1d2e4d40a8_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/01/09/16732354874e5a79b99c60815f034044634d7df819_thumbnail_600x.jpg'),
('https://img.ltwebstatic.com/images3_pi/2023/05/03/1683110329956f8c2cb09fe41cacbf3006b13e9939_thumbnail_600x.jpg');

CREATE TABLE estilos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    img TEXT
);

INSERT INTO estilos(img) VALUES 
('https://www.lizzieinlace.com/wp-content/uploads/2021/06/1-cottagecore-aesthetic.jpg'),
('https://cosmiquestudio.com/product_images/uploaded_images/how-to-be-a-pastel-goth-girl-1.jpg'),
('https://www.estilodf.tv/wp-content/uploads/2023/03/old-money-style.jpg');

CREATE TABLE productos_populares(
	id INT PRIMARY KEY AUTO_INCREMENT,
    img TEXT,
    genero VARCHAR(20)
);


INSERT INTO productos_populares(img,genero) VALUES 
('https://img.ltwebstatic.com/images3_pi/2021/11/05/1636075096a5db5298f41c9ca73f269bc36806f4e1_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2022/10/24/1666578909a5a427390567ed2c6112eb9e1d800aef_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2021/09/15/16316812643c63c02cbbb84391eb7c6172587a48b5_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2022/12/15/16710756547a71abb6c86719fac75aa248dd2cf775_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/03/27/16798839584bd4d2c0c99158add1db89c2adede444_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/05/27/1685180059d7afea8ea9f43f08fd441f429b6d30ec_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/04/03/1680504148bd25a0e3b257d17fce8f199802eb1272_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2023/05/15/168412709473dc751b1a2774b98de8a19321808a6f_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2022/08/12/16602701745acbc1c3cf58134945440c423f2fc83d_thumbnail_600x.jpg','mujer'),
('https://img.ltwebstatic.com/images3_pi/2022/12/13/1670908329a80975c665f1d34301e224079615f356_thumbnail_600x.jpg','mujer'),

('https://img.ltwebstatic.com/images3_pi/2023/06/19/1687142198be741c1d27267a98302dfbf0441df25d_thumbnail_600x.webp','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/05/30/1685424861038ca14d660ccb75e31b7ee6ad86910d_thumbnail_600x.jpg','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/05/30/1685411460bc0b24b9f55bb56aceb8efc673ba2b69_thumbnail_600x.jpg','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/05/29/168533602214a84c401b43df3cd2ed38b48806de31_thumbnail_600x.jpg','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/06/15/1686801656c658cd4dc50340fe9832731fe20ea4f5_thumbnail_600x.jpg','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/06/20/168722552938c82f0cc4346933997e179c4ac12a1d_thumbnail_600x.webp','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/05/02/16829900262d957298e13b74a87b7276da7f0655bb_thumbnail_600x.jpg','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/05/24/1684896512b0a9831947a21c8394de6453f20ef176_thumbnail_600x.jpg','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/05/08/1683513420af16d49edd0c50e30da7ef789c5c4a73_thumbnail_600x.jpg','hombre'),
('https://img.ltwebstatic.com/images3_pi/2023/04/26/16825017365abc9e8ea28de217a1a3b0bcc169d212_thumbnail_600x.jpg','hombre');

SELECT * FROM productos_populares WHERE genero = 'mujer';

CREATE TABLE banner(
	id INT PRIMARY KEY AUTO_INCREMENT,
    img TEXT,
    genero VARCHAR(20)
);

INSERT INTO banner(img,genero) VALUES 
('https://redeemfashion.files.wordpress.com/2019/04/banner-men.jpg','hombre'),
('https://img.freepik.com/premium-vector/spring-fashion-sale-banner-design-template_2239-1180.jpg?w=2000','mujer');

SELECT * FROM banner WHERE genero = 'mujer';
SELECT * FROM banner WHERE genero = 'hombre';

CREATE TABLE usuarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
    correo VARCHAR(80) NOT NULL UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    contrasena VARCHAR(200) NOT NULL,
    fecha_creacion TIME DEFAULT NOW()
);

INSERT INTO usuarios (correo, nombre,contrasena,fecha_creacion) VALUES ('OctavioCC@gmail.com','Octavio','Patito',NOW()),
																	   ('Elizabethct@gmail.com','Eli <3','Patito2',NOW());

SELECT * FROM usuarios;


CREATE TABLE productos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    img TEXT,
    genero VARCHAR(20),
    precio FLOAT,
    nombre VARCHAR(140)
);

INSERT INTO productos (img, genero, precio,nombre) VALUES
('https://img.ltwebstatic.com/images3_pi/2021/11/05/1636075096a5db5298f41c9ca73f269bc36806f4e1_thumbnail_600x.jpg', 'mujer', 483.50,'Vestido tank de muslo con abertura'),
('https://img.ltwebstatic.com/images3_pi/2022/10/24/1666578909a5a427390567ed2c6112eb9e1d800aef_thumbnail_600x.jpg', 'mujer', 734.20,'Top tank corto con corazón con estampado de telaraña'),
('https://img.ltwebstatic.com/images3_pi/2021/09/15/16316812643c63c02cbbb84391eb7c6172587a48b5_thumbnail_600x.jpg', 'mujer', 599.70,'Camiseta estampado de cráneo'),
('https://img.ltwebstatic.com/images3_pi/2022/12/15/16710756547a71abb6c86719fac75aa248dd2cf775_thumbnail_600x.jpg', 'mujer', 423.40,'Top de tirantes corto con estampado de esqueleto'),
('https://img.ltwebstatic.com/images3_pi/2023/03/27/16798839584bd4d2c0c99158add1db89c2adede444_thumbnail_600x.jpg', 'mujer', 702.80,'Pantalón cargo con bolsillo lateral con solapa'),
('https://img.ltwebstatic.com/images3_pi/2023/05/27/1685180059d7afea8ea9f43f08fd441f429b6d30ec_thumbnail_600x.jpg', 'mujer', 368.90,'Jeans ajustados con bolsillo oblicuo'),
('https://img.ltwebstatic.com/images3_pi/2023/04/03/1680504148bd25a0e3b257d17fce8f199802eb1272_thumbnail_600x.jpg', 'mujer', 567.60,'Sudadera con estampado floral con eslogan con forro termico'),
('https://img.ltwebstatic.com/images3_pi/2023/05/15/168412709473dc751b1a2774b98de8a19321808a6f_thumbnail_600x.jpg', 'mujer', 432.10,'Vestido camisero unicolor con cordon trasero'),
('https://img.ltwebstatic.com/images3_pi/2022/08/12/16602701745acbc1c3cf58134945440c423f2fc83d_thumbnail_600x.jpg', 'mujer', 699.25,'Mono tubo unicolor pierna amplia'),
('https://img.ltwebstatic.com/images3_pi/2022/12/13/1670908329a80975c665f1d34301e224079615f356_thumbnail_600x.jpg', 'mujer', 372.90,'Falda en mezclilla desgarro bajo crudo'),

('https://img.ltwebstatic.com/images3_pi/2023/06/19/1687142198be741c1d27267a98302dfbf0441df25d_thumbnail_600x.webp', 'hombre', 548.70,'Magnifity hombres camiseta con estampado de dibujos'),
('https://img.ltwebstatic.com/images3_pi/2023/05/30/1685424861038ca14d660ccb75e31b7ee6ad86910d_thumbnail_600x.jpg', 'hombre', 721.60,'Hoodie hombres capucha araña con estampado con cordon'),
('https://img.ltwebstatic.com/images3_pi/2023/05/30/1685411460bc0b24b9f55bb56aceb8efc673ba2b69_thumbnail_600x.jpg', 'hombre', 368.25,'Playera de hombre, insecto, araña dibujo, ventilador dibujo'),
('https://img.ltwebstatic.com/images3_pi/2023/05/29/168533602214a84c401b43df3cd2ed38b48806de31_thumbnail_600x.jpg', 'hombre', 640.80,'Hombres sudadera con cremallera'),
('https://img.ltwebstatic.com/images3_pi/2023/06/15/1686801656c658cd4dc50340fe9832731fe20ea4f5_thumbnail_600x.jpg', 'hombre', 496.10,'Pants jogger deportivo slim fit super calidad elástico'),
('https://img.ltwebstatic.com/images3_pi/2023/06/20/168722552938c82f0cc4346933997e179c4ac12a1d_thumbnail_600x.webp', 'hombre', 374.80,'Manfinity EMRG hombres shorts con extraterrestre y con estampado de letra de cintura con cordon'),
('https://img.ltwebstatic.com/images3_pi/2023/05/02/16829900262d957298e13b74a87b7276da7f0655bb_thumbnail_600x.jpg', 'hombre', 539.20,'Pantalón jogger cargo skinny de gabardina strech John Silver'),
('https://img.ltwebstatic.com/images3_pi/2023/05/24/1684896512b0a9831947a21c8394de6453f20ef176_thumbnail_600x.jpg', 'hombre', 446.60,'Manfinity homme hombres camisa unicolor con botón delantero'),
('https://img.ltwebstatic.com/images3_pi/2023/05/08/1683513420af16d49edd0c50e30da7ef789c5c4a73_thumbnail_600x.jpg', 'hombre', 703.40,'Manfinity hypemode hombres camisa polo tejido de canale'),
('https://img.ltwebstatic.com/images3_pi/2023/04/26/16825017365abc9e8ea28de217a1a3b0bcc169d212_thumbnail_600x.jpg', 'hombre', 378.90,'Manfinity RSRT hombres con estampado de rayas camisa  y de cintura con cordon shorts sin camiseta');

CREATE TABLE carrito(
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);



INSERT INTO carrito (id_usuario, id_producto, cantidad) VALUES (1, 20, 1);





SELECT p.img AS img, u.id AS Id_Usuario, c.id, c.cantidad, c.fecha_agregado
FROM carrito c
JOIN productos p ON c.id_producto = p.id
JOIN usuarios u ON c.id_usuario  = u.id and u.id = 1;

select * from carrito where id = 1;
UPDATE carrito SET cantidad = (cantidad + 1) WHERE id = 1;
SELECT c.id AS Id_EnCarro, p.id AS IdProducto, u.id AS IdUsuario, p.nombre AS Producto_Nombre, c.cantidad AS Cantidad, p.img, ROUND(p.precio * c.cantidad,2) AS Total FROM carrito c JOIN productos p ON c.id_producto = p.id JOIN usuarios u ON c.id_usuario  = u.id and u.id = 1;

DELETE FROM carrito WHERE id = 1;

