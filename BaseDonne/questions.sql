-- Question A

SELECT *
FROM Client
WHERE noTelephone = '(999)999-9999'

-- -Question  B

SELECT noCommande, dateCommande
FROM Commande WHERE noClient = 10 AND noCommande > 5

-- -Question  c

SELECT noArticle, description FROM Article WHERE (prixUnitaire BETWEEN 10 AND 20);

-- -Question  d

SELECT A.noClient, A.noTelephone, B.noCommande FROM Client
A JOIN Commande B 
ON A.noClient = B.noClient WHERE B.dateCommandE = '2000-04-06'

-- -Question  e


SELECT noArticle 
FROM LigneCommande A JOIN Commande B ON A.noCommande = B.noCommande
WHERE B.noClient = 10 AND B.dateCommande > '2000-01-06';

-- -Question  f

SELECT noLivraison FROM DetailLivraison A JOIN Commande B
ON A.noCommande = B.noCommande WHERE B.noClient = 10;


-- -Question  G

SELECT *
FROM Article
WHERE description LIKE 'C%'

-- -Question  H


SELECT * FROM Client WHERE noTelephone IS NOT NULL;

-- -Question  I

SELECT * FROM Article

WHERE prixUnitaire > (SELECT AVG(prixUnitaire) FROM Article);

-- -Question  J

SELECT * FROM Article 
WHERE prixUnitaire = (SELECT MIN(prixUnitaire) FROM Article);


-- -Question  K 

SELECT L.noLivraison
FROM Livraison L, DetailLivraison D
WHERE L.noLivraison = D.noLivraison AND
dateLivraison = '4/06/2000'

-- -Question  L

