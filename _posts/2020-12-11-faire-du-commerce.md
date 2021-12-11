---
layout: post
title:  "Faire du commerce"
date:   2021-12-11 11:00:00 +0100
category: guide
image: /assets/images/articles/commerce.jpg
author: Quozul
---
Sur Pickaria il existe deux façon de faire du commerce. Découvrez comment maitriser les deux à la perfection !

## Gagnez de l'argent

Vous pouvez collecter de l'argent sur le serveur en tuant des monstres ou en minant des resources.

> A venir : les métiers.

## Commandes utiles

- `/money` ou `/bal`  
Voir la quantité d'argent possédée.  
Vous pouvez également ouvrir la liste des joueurs pour consulter votre solde en même temps.
- `/pay <pseudo du joueur> <quantité>`  
Donne de l'argent à un joueur.
- `/baltop`  
Voir qui sont les joueurs les plus riches du serveur.

## L'hôtel des ventes

L'hôtel des ventes est la solution la plus simple pour faire du commerce. Vous y retrouverez des articles mis en vente par tous les joueurs du serveur !

Pour y accéder, rien de plus simple, effectuez la commande `/ah`. Tout y est indiqué.

Si jamais vous vous y perdez, voici quelques autres commandes :
- `/ah`  
Accéder à l'hôtel des ventes.
- `/ah sell <prix> [quantité]`  
Ajoute l'objet que vous tenez en main à l'hôtel des ventes.
- `/ah selling`  
Voir tous les articles que vous vendez. C'est à partir de ce menu que vous pouvez annuler la vente d'un article en particulier.
- `/ah cancel`  
Annuler toutes vos ventes.
- `/ah expired`  
Voir tous les articles dont la mise en vente à expiré et qui sont à récupérer.

## Les magasins coffres

Les magasin coffres vous permettent vendre une quantité plus considérables d'objets, cependant les joueurs doivent se déplacer à votre ville. Pensez à ouvrir votre ville à la téléportation avec `/town toggle public on`.

Avant de pouvoir créer un magasin coffre, il faut être dans une ville, que la parcelle vous apartienne et soit de type "shop", utilisez `/plot set shop` pour changer son type.

**Voici les étapes pour créer un magasin coffre :**
1. Placez un coffre au sol.  
Si le coffre contient déjà un objet, celui-ci sera l'objet mis en vente ou acheté.
2. Placer une pancarte sur le coffre.
3. Sur la 2e ligne du panneau, écrire la quantité d'articles à vendre.
4. Sur la 3e ligne écrire les prix comme suit :  
`B <prix de vente> : <prix d'achat> S`  
Vous pouvez omettre un prix si vous ne souhaitez pas acheter l'article par exemple ou écrire "free" à la place du prix pour le vendre ou l'acheter gratuitement.
5. Sur la 4e ligne, écrire le nom de l'article en vente ou "?" pour qu'il soit automatiquement renseigné.  
Dans le cas où vous avez écrit "?" sur la 4e ligne, cliquez sur la pancarte avec l'objet à mettre en vente.
6. Remplir le coffre !  
La première ligne sera remplie par le pseudonyme de son propriétaire.

**Voici quelques exemples :**

![ChestShops](/assets/images/articles/chestshops.jpg){:class="img-fluid"}

1. Vente de 1 bloc de diamant pour 90$, pas d'achat.
2. Achat de 64 diorite polie pour 10$.
3. Vente de 32 pierres pour 30$ et achat de 32 pierres pour 10$.