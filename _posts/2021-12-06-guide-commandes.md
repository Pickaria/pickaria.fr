---
layout: post
title:  "Guide des commandes"
date:   2021-12-06 12:00:00 +0100
category: guide
image: /assets/images/articles/guide_commandes.jpg
author: Quozul
modified_date: 2021-12-07 12:00:00 +0100
permalink: /guide/commandes
---
Besoin d'aide pour utiliser les commandes sur le serveur ? Voici un guide qui pourra vous aider !

## Social

- `/m <pseudo du joueur> <message>`  
Envoyer un message privé à un joueur.
- `/r <message>`  
Répondre à un message privé à un joueur.

## Téléportations

- `/tpa <pseudo du joueur>`  
Demander à un joueur de se téléporter à sa position.
- `/sethome <nom de la maison>`  
Définir un point de téléportation.
- `/home <nom de la maison>`  
Se téléporter à un point de téléportation définie.
- `/rmhome <nom de la maison>`  
Supprimer un point de téléportation.

## Economie

Vous pouvez collecter de l'argent sur le serveur en tuant des monstres ou en minant des resources.

- `/money`  
Voir la quantité d'argent possédée.
- `/pay <pseudo du joueur> <quantité>`  
Donne de l'argent à un joueur.
- `/baltop`  
Voir qui sont les joueurs les plus riches du serveur.

## Hôtel des ventes
L'hôtel des ventes permet de vendre les objets que vous avez récolté sur le serveur.

- `/ah`  
Accéder à l'hôtel des ventes.
- `/ah sell <prix> [quantité]`  
Ajoute l'objet que vous tenez en main à l'hôtel des ventes.
- `/ah selling`  
Voir tous les articles que vous vendez.
- `/ah cancel`  
Annuler toutes vos ventes.
- `/ah expired`  
Voir tous les articles expirés à récupérer.

## Gérer une ville

Le plugin Towny permet de gérer des villes sur le serveur.
Plus d'informations sur les commandes sur le [wiki officiel](https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands){:target="_blank"}{:rel="noopener noreferrer"}.

Vous retrouverez ci-dessous les commandes principales.

- `/towny map`  
Affiche une carte des parcelles.
- `/town new <nom de la ville>`  
Création d'un nouvelle ville.  
Coût de 250$ pour fonder une ville.  
Taxe journalière de 10$ par parcelles.
- `/town invite <pseudo du joueur>`  
Inviter un joueur dans votre ville.
- `/town join <nom de la ville>`  
Rejoindre une ville (la ville doit être ouverte avant).
- `/town deposit <quantité d'argent>`  
Déposer de l'argent dans la banque de la ville.  
Permet de payer la taxe journalière de la ville.
- `/town spawn`  
Se téléporter au spawn de la ville contre une somme d'argent.
- `/resident list`  
Liste des résidents de la ville.
- `/town here`  
Voir les informations sur la ville dans laquelle vous vous trouvez.
- `/towny prices`  
Voir les différents coûts en rapport avec les villes.

Lorsqu'un joueur utilise la commande `/town spawn`, le joueur paie une taxe qui sera crédité au compte de la ville.  
Le maire de la ville peut exiger de ses habitants une taxe journalière ou un coût pour acheter une parcelle.

### Administration de la ville
Les commandes qui suivent peuvent être exécutés par le chef de la ville.

- `/town toggle open <on/off>`  
Autoriser les joueurs à rejoindre la ville.
- `/town toggle pvp <on/off>`  
Autoriser le PvP au sein de la ville.
- `/town toggle explosion <on/off>`  
Autoriser les explosions au sein de la ville.
- `/town toggle mobs <on/off>`  
Autoriser les monstres au sein de la ville.
- `/town set spawncost <coût>`  
Modifier le coût pour se téléporter au spawn.
- `/town set taxes <coût>`  
Modifier la taxe journalière pour chaque résidents de la ville.
- `/town set plotprice <coût>`  
Modifier le coût par défaut d'une parcelle
- `/town set plottax <coût>`  
Modifier la taxe journalière pour chaque résidents de la ville par parcelles qu'ils possèdent.

## Avant-postes
Les avant-postes sont un bon moyen pour protéger des parcelles qui ne sont pas aux frontières de votre ville.

- `/town claim outpost`  
Fonder un avant-poste pour la ville.  
Après ce premier claim, vous pouvez claim normalement autour.
- `/town outpost list`  
Lister tous les avant-postes de votre ville.
- `/town outpost <nom de l'avant poste>`  
Se téléporter à un avant-poste.

### Gestion des parcelles
- `/plot forsale`  
Mettre une parcelle en vente.
- `/plot claim`  
Acheter une parcelle.
- `/plot unclaim`  
Vendre une parcelle.
- `/plot trust add <pseudo du joueur>`  
Ajouter un joueur à votre parcelle.
- `/plot set name <nom de la parcelle>`  
Renommez votre parcelle.