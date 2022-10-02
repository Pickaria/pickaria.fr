---
layout: post
title:  "Nouveaux datapacks"
date:   2022-01-14 13:25:00 +0100
category: [update]
image: /assets/images/articles/datapacks.jpg
author: Quozul
---
Quelques nouvelles fonctionnalités ont été ajoutées sur le serveur, principalement à des fins de décoration !

## Tombes
Lors de votre mort, une tombe sera créée que seulement vous pourrez récupérer, elles ne peuvent donc pas être volées.  
Elle disparaitra au bout de 1 heure (si les chunks sont chargés).  
C'est une solution pour tous les joueurs qui meurent, principalement à cause de bugs, et qui perdent leur équipement à jamais.

**Les têtes tombent à côté de la tombe** et peuvent donc être récupérée par autrui.

## Statues
La position des portes armures peut être modifiée, pour cela, il vous faut un livre.  
Fabriquez un livre vierge ("book and quill" en anglais), puis signez-le avec le nom "Statues".  
Ouvrez ce livre à côté d'un porte armure et vous pourrez le customiser !

## Cadres invisibles
Vous pouvez rendre des cadres invisibles, soit avec le livre des statues soit avec la commande : `/trigger if_invisible`.

## Portails custom
Les portails du nether peuvent prendre n'importe quelle forme, que ce soit un rond, un losange ou toute autre forme abstraite ! Soyez créatifs.  
**Surface du portail :** entre 10 et 84 blocs.  
(Je précise tout de même, que les portails avec des formes "déplacées" ne sont pas autorisés)

## Elytres renforcées
Et s'il était possible d'avoir des Elytres et votre meilleure plastron en netherite en même temps ?  
Jetez des Elytres et un plastron sur une enclume pour les combiner et créer des Elytres renforcées !  
Jetez ces Elytres renforcées sur une meule ("grindstone" en anglais) pour les dissocier.

**Note concernant les lags**

Une première mesure vient d'être prise, les entités ne sont désormais plus activées ni envoyées au joueur si elles sont trop loin.  
Réduisant ainsi la charge côté serveur et améliorant les performances pour les joueurs avec des petites connexions.  
Les villageois considérés comme inactifs sont également désactivés car c'était la principale source de lag après investigation.