
--***************************************************************************
--Nom: Ibrahima sylla Et Sokhna Diarra Mbow
--Date: 23-04-2022
--Projet de fin de session 
--***************************************************************************


-- -- Identification des clef etrangere:
-- Dans la table Commande : noClient est une clef étrangère
-- Dans la table LigneCommande : noCommande et noArticle sont des clef étrangères
-- Dans la table DetailLivraison : noLivraison , noCommande et noArticle sont des clef étrangères 


-- Debut  Reponse Question A
SELECT * FROM Client WHERE noTelephone = '(999)999-9999'

-- Nos table sont creer dans la base de donne qui se nome teste



-- -Debut  Reponse Question  B
SELECT noCommande, dateCommande FROM Commande WHERE  (noClient = 10 AND noCommande > 5)


-- -Debut  Reponse Question  c
SELECT noArticle, description  FROM Article  WHERE (prixUnitaire BETWEEN 10 AND 20);


--- Debut  Reponse Question  d
SELECT Client.noClient,  noTelephone, noCommande
FROM Client Client , Commande commande WHERE Client.noCLient = Commande.noClient AND DateCommande = '4/06/2000'



--- Debut  Reponse Question e ----
SELECT DISTINCT noArticle FROM LigneCommande Ligne , Commande Commande 
 WHERE  Ligne.noCommande  = Commande.noCommande AND
noClient = 10 AND DateCommande >'01/06/2000'


--- Debut  Reponse Question f  ----
SELECT  noLivraison FROM Commande Commande , DetailLivraison Detail
WHERE Commande.noCommande = Detail.noCommande AND Commande.noClient = 10;


-- -Debut    Reponse Question  G
SELECT * FROM Article WHERE description LIKE 'C%'


---- Debut  Reponse Question  H
SELECT * FROM Client WHERE noTelephone IS  Not NULL;



-- -Question  I
SELECT * FROM Article WHERE prixUnitaire > (SELECT AVG(prixUnitaire)  FROM Article);


-- -Question  J
SELECT * FROM Article  WHERE prixUnitaire = (SELECT MIN(prixUnitaire) FROM Article);


-- -Question  K 

SELECT noLivraison FROM Livraison WHERE dateLivraison = '4/06/2000' AND 
noLivraison IN (SELECT noLivraison FROM 
DetailLivraison GROUP BY noLivraison HAVING COUNT(noLivraison) >= 2) ORDER BY noLivraison;

-- -Question  L

SELECT noArticle, SUM(quantite) As QuantiteTotale FROM Commande Commande, LigneCommande Ligne
WHERE Ligne.noCommande  =  Commande.noCommande  AND dateCommande > '05/07/2000'
GROUP BY noArticle HAVING SUM(quantite) >=10

