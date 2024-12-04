---
title: Mise à jour de l'hiver 2024
createdAt: 2024-12-01
category: [update]
image: /assets/images/articles/mise-a-jour-hiver-2024/vignette.png
author: Quozul
draft: false
---

Pickaria reçoit une mise à jour pour l'hiver 2024, découvrez tout ce que contient cette mise à jour dans ce post !

<!--more-->

## Tutoriel
![Tutoriel](/assets/images/articles/mise-a-jour-hiver-2024/tutoriel.png)
Le tutoriel en jeu, disponible avec la commande `/tuto`, a été grandement étoffé pour inclure plus d'informations sur les diverses fonctionnalités du serveur.
Ce tutoriel est affiché dès la première connexion et disponible avec la commande `/tuto` pour une relecture plus tard.

Désormais, tout est documenté dans le tutoriel. S'il manque quelque chose, n'hésitez pas à demander pour que ce soit rajouté.
Vous retrouverez des explications plus détaillées sur l'utilisation des nouvelles fonctionnalités décrites dans ce post.

## Marché
La quantité de vendeurs est affichée pour chaque objet mis en vente dans le menu.

La commande `/sell` permet de mettre en vente un objet dans le marché, s'il y a déjà cet objet en vente dans le marché, il n'est plus nécessaire de reseigner un prix, le prix moyen des ventes sera utilisé.
S'il n'y a aucune offre actuellement, il faudra alors renseigner le prix unitaire auquel vous souhaitez vendre cet objet.
Et s'il y a déjà des offres en vente, plusieurs prix adaptés seront proposés dans l'autocomplétion de la commande.

## Kits
![Tutoriel](/assets/images/articles/mise-a-jour-hiver-2024/kit-starter.png)
À la première connexion, si un joueur n'a jamais joué auparavant sur le serveur, il lui sera donné un kit débutant gratuitement.
Il est possible d'acheter le kit débutant avec la commande `/kit buy starter` pour 25 crédits.

D'autres kits seront disponibles à l'avenir.

## Économie
Chaque nouveau joueur recevra 500 crédits pour bien débuter sa partie. Ces crédits peuvent servir pour racheter le kit débutant en cas de mort ou se téléporter à ses amis par exemple.
De plus, les commandes ont été améliorées :
- La commande `/baltop` ou `/balancetop` a été ajoutée pour lister les joueurs les plus riches du serveur.
- La commande `/money` ou `/balance` affichera un lien pour suggérer la commande `/pay`.
- La commande `/pay` arrondi le montant des paiements à 2 décimales, le montant minimum d'un transfer est de 0.01 crédits.

## Créatures
![Tutoriel](/assets/images/articles/mise-a-jour-hiver-2024/oeuf-custom.png)
Le menu permettant d'acheter des générateurs de créatures permet désormais d'acheter des générateurs vides pouvant être modifiés avec des oeufs.
Des oeufs d'animaux communs sont mis en vente dans ce même menu, ils peuvent être utilisés pour commencer un élevage ou modifier un générateur de créature vide.

Il y a aussi des oeufs pour faire apparaitre des animaux ou des monstres avec quelques attributs modifiés mis en vente.
Les monstres modifiés, souvent plus difficile à tuer que les monstres réguliers, peuvent représenter un nouveau défi pour votre aventure !

## Expérience
![Tutoriel](/assets/images/articles/mise-a-jour-hiver-2024/fiole-experience.png)
Si vous avez trop d'expérience, que vous souhaitez la partager ou même la vendre dans le marché, il est maintenant possible de convertir ses points d'expérience en fiole via le `/menu`.
Il est requis d'avoir le grade Voyageur pour pouvoir utiliser cette fonctionnalité.

## Lobby
Le passage dans le portail du lobby ne créé désormais plus de point de téléportation, à la place, seulement le premier passage dans le portail téléporte aléatoirement dans le monde.

Les prochains passages dans le portail, téléportent au point de réapparition du joueur (son lit par exemple) s'il en a un, ou sinon, au précédent lieu de téléportation aléatoire lié au passage dans le portail.
Lors de la mort, si vous n'avez pas de point de réappatition, vous serez téléporté au lobby et non plus au spawn du monde.
Le spawn du monde reste accessible à l'aide des points d'intérêts.

La commande `/lobby` est bloquée si on est déjà dans le lobby.

## Récompenses
![Tutoriel](/assets/images/articles/mise-a-jour-hiver-2024/contenu-recompense.png)
La progression pour obtenir la prochaine récompense est affichée en haut de l'écran tant que la récompense n'a pas été récupérée.

La récompense de série remplace la récompense commune, rendant l'obtention de la récompense de série plus facile.
De plus, la quantité de points requis pour obtenir la récompense est réduite.

Il est désormais possible de consulter le contenu et les probabilité d'obtention de chaque objet dans les récompenses via le menu d'achat des récompenses.

## Métiers
Une barre de progression dans le métier est affichée en haut de l'écran si la récompense quotidienne a été récolté.

Pour votre prochaine ascension, un message sera envoyé à tout le serveur.

Auparavant, le suffixe ne se mettait pas toujours correctement à jour lors de l'ascension, ça a été corrigé.

## Téléportations
![Tutoriel](/assets/images/articles/mise-a-jour-hiver-2024/home-nether.png)
Il est désormais possible de créer des points de téléportation dans les autres dimensions !
Néanmoins, le prix de ces téléportation est légèrement plus élevé que les téléporations vers la surface.

Des points d'intérêt globaux à tout le serveur ont été créés, permettant ainsi de se rendre au stronghold par exemple.

La commande `/back` fait son arrivée sur le serveur ! Cependant, faites attension, un `/back` après une mort dans le vide, téléporte dans le vide !

Une superbe animation a été ajoutée lorsqu'un joueur est en train de se téléporter.

Bon nombre de bugs gênant ont été corrigés :
- Bouger la tête pendant une téléportation ne l'annule plus !
- La mauvaise vérification qu'une destination est sûre a été corrigé. Cependant, la téléportation sur une dalle est toujours considéré comme destination non sûre.
- Les demandes de téléportation seront automatiquement annulée si aucune réponse n'a été reçue une minute après son envoi.
- Il est possible de créer des points de téléportation avec des espaces dans leur nom.

## Grades
![Grades](/assets/images/articles/mise-a-jour-hiver-2024/grade-voyageur.png)
Le premier grade achetable avec les crédits en jeu arrive sur le serveur !
Il vous permettra de débloquer certaines des nouvelles fonctionnalités du serveur.

Le premier grade, Voyageur, est disponible pour 100 000 crédits.
Il permet de convertir l'expérience en fiole, de créer des points de téléportation dans le Nether et l'End, de revenir à son lieu de mort, d'acheter des générateurs de créatures vides et plein d'autres fonctionnalités !

## Cosmétiques
Des cosmétiques sont désormais disponibles à l'achat dans le menu contre des Éclats de Pickarite.
Ces cosmétiques annonce l'arrivée de [la boutique officielle](https://pickaria.tebex.io/) permettant de soutenir le serveur financièrement.

## Villes
La taxe des villes quotidienne de 10 Crédits sera supprimée. Soyez rassuré, votre ville ne sera jamais supprimée par manque de fonds.

Il sera désormais possible d'agrandir votre ville à l'infini moyennant paiement !
La quantité de parcelles bonus pouvant être annexées est illimité, mais le prix augmente de 20% à chaque nouveau claim.
Voici un exemple de prix :
- Première parcelle bonus : 25 Crédits
- Deuxième : 25 Crédits + 20% = 30 Crédits
- Troisième : 30 Crédits + 20% = 36 Crédits
- Dixième : 129 Crédits
- Cinquantième : 189 592 Crédits

## Carte dynamique
[Une carte dynamique](https://map.pickaria.fr/) permettant de visualiser où sont vos amis ainsi que les villes a été rajoutée.

## Serveur créatif
Le serveur créatif a été mis à jour pour la version 1.21 de Minecraft.

## Mode veille
Les serveurs survie et créatif se mettront désormais en veille quelques heures après que le dernier joueur se soit déconnecté.
Lors de la connexion sur un serveur en veille, vous serez redirigé sur un serveur d'attente pendant quelques secondes, puis automatiquement redirigé vers le serveur demandé une fois celui-ci prêt.

## Autre
- Modification du format des messages privés.
- Nouveau format et traduction de tous les messages serveur.
- Nouveaux menus.
- Suppression de la commande `/ask`.

## Note de fin
Merci à tous ceux qui ont joué sur le serveur, grâce à vous, j'ai pu prendre en compte vos retours pour améliorer l'expérience de jeu sur le serveur.
