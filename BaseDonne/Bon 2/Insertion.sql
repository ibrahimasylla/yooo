

create DATABASE Teste2


INSERT INTO Client(noClient, nomClient, noTelephone)
VALUES (10, 'Ibrahima Sylla ', '(999)999-9999');
INSERT INTO Client (noClient, nomClient, noTelephone)
VALUES (20, 'Diarra mbow','(403)493-4180');
INSERT INTO Client (noClient, nomClient, noTelephone)
VALUES (30, 'Claire Landry', '(780)755-9925');
INSERT INTO Client (noClient, nomClient, noTelephone)
VALUES (40, 'Luke Thompson', '(604)858-8684');
INSERT INTO Client (noClient, nomClient, noTelephone)
VALUES (50, 'Lincoln Poirier ', '(780)859-1535');
INSERT INTO Client (noClient, nomClient, noTelephone)
VALUES (60, 'Harper jack', '(344)882-1078');


INSERT INTO Commande(noCommande, dateCommande, noClient)
VALUES  (10, '04-06-2000',10);
INSERT INTO Commande(noCommande, dateCommande, noClient)
VALUES  (20, '05-07-2000',20);
INSERT INTO Commande(noCommande, dateCommande, noClient)
VALUES  (30, '01-06-2000',30);
INSERT INTO Commande(noCommande, dateCommande, noClient)
VALUES  (40, '05-06-2000',40);
INSERT INTO Commande(noCommande, dateCommande, noClient)
VALUES  (50, '08-10-2000',50);
INSERT INTO Commande(noCommande, dateCommande, noClient)
VALUES  (60, '09-01-2000',10);
INSERT INTO Commande(noCommande, dateCommande, noClient)
VALUES  (70, '09-01-2000',10);




INSERT INTO Article (noArticle,	description, prixUnitaire, quantiteEnStock)
VALUES (5,	'Fancy fonts are',	40.33 ,	5);
INSERT INTO Article (noArticle,	description, prixUnitaire, quantiteEnStock)
VALUES (10,	'Fancy fonts are',	40.33 ,	10);
INSERT INTO Article (noArticle,	description, prixUnitaire, quantiteEnStock)
VALUES (20,	'Fancy fonts are ',	12.30 ,	20);
INSERT INTO Article (noArticle,	description, prixUnitaire, quantiteEnStock)
VALUES (30,	'Contenu du boite',	13.30 ,	30);
INSERT INTO Article (noArticle,	description, prixUnitaire, quantiteEnStock)
VALUES (40,	'best used for ',	15.40 ,	30);
INSERT INTO Article (noArticle,	description, prixUnitaire, quantiteEnStock)
VALUES (50,	'decorative purposes', 50.50 ,	30);
INSERT INTO Article (noArticle,	description, prixUnitaire, quantiteEnStock)
VALUES (60,	'That being said',	60.60 ,	40);



INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (10,10,10);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (10,20,20);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (20,20,30);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (20,50,40);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (30,20,50);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (30,10,60);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (70,5,60);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (70,20,6);
INSERT INTO LigneCommande (noCommande, noArticle,quantite)
VALUES (70,10,6);






INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (10,  '06-06-2000');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (20, '4-06-2000');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (30,  '4-06-2000');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (40, '4-07-2005');
INSERT INTO livraison (noLivraison, dateLivraison )
VALUES (50, '4-07-2001');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (60, '4-07-2003');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (700, '4-06-2000');



SELECT * from DetailLivraison

INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (10, 10,10,10);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (20, 10, 20,10);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (30,20,20,30);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (40, 20,50,40);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (50, 30, 20,30);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (60, 30, 10,10);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (10, 30, 10,30);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (50, 10, 20,10);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (20, 30, 20,10);
INSERT INTO DetailLivraison (noLivraison, noCommande, noArticle,quantiteLivree)
VALUES (50, 20, 20,10);













SELECT * from Commande











