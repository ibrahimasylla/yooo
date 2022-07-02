INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (10, 'Luc Sansom', 'Skagen 21', '(999)999-9999');
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (20, ' Dollard Tremblay','(888)888-8888');
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (30, ' Lin Bô', '(777)777-7777 ');
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (40, '  Jean Leconte', '(666)666-6666');
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (50, 'Hafed Alaoui', '(555)555-5555');
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (60, 'Marie Leconte ', '(666)666-6666');
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (70, 'Simon Lecoq ', '(444)444-4419');
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (80, 'Dollard Tremblay ', '(333)333-3333');







INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (100,  '2000-03-06');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (101, '2000-04-06');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (102,  '2000-04-06');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (103, '2000-05-06');
INSERT INTO livraison (noLivraison, dateLivraison )
VALUES (104, '2000-07-07');
INSERT INTO livraison (noLivraison, dateLivraison)
VALUES (105, '2000-08-07');



INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (1,10,10);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (1,70,5);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (1,90,1);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (2,40,2);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (2,95,3);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (3,20,1);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (4,40,1);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (4,50,1);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (5,10,5);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (5,20,5);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (5,70,3);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (6,10,5);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (6,40,1);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (7,50,1);
INSERT INTO LignCommande (noCommande, noArticle,quantite)
VALUES (8,20,3);




INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (100, 1,10);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (100, 1, 70);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (100,3,4);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (101, 1,10);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (102, 3, 40);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (102, 2, 95);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (103, 1, 90);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (104, 4, 40);
INSERT INTO DertailLivraison (noLivraison, nomCommande, noArticle,quantiteLivree)
VALUES (105, 5, 70);






INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (1, '2000-01-06',10);
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (2, ' 2000-02-06',20);
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (3, ' 2000-02-06',10);
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (4, '  2000-05-07', 10);
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (5, '2000-09-07', 10);
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (6, '2000-09-07', 430);
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (7, '2000-07-15 ',40);
INSERT INTO Client (noClient, nomClient, noTéléphone)
VALUES (8, '2000-07-15 ', 40);


 SELECT * FROM Customers
WHERE noTéléphone  = '(999)999-9999 '

 SELECT noCommande , dateCommande
 FROM  Commande where noClient = 10 AND noCommande > 5

  SELECT noArticle , description
 FROM  Article where prixUnitaire BETWEEN 10  and  20
 
  SELECT C.noClient , noTéléphone , noCommande 
   FROM Commande , client  WHERE  C.noClient = Commande.noClient  AND DateCommande = 'le 4/06/2000.'


SELECT FROM WHERE Client.noClient, noTéléphone, noCommande Client, Commande
Client.noCLient = Commande.noClient AND DateCommande = ‘4/06/2000’.
 