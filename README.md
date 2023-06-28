# deux-et-cinq

Petit kata de refactoring en Français

## Règles du jeu

Le joueur commence par lancer 5 dés. Ensuite, il met de côté les
dés qui sont tombés sur 2 ou 5 - ils sont alors "coincés" et ne peuvent
plus être utilisés Ensuite, on ajoute le total des dés qui restent au
score du joueur. La partie s'arrête quand tous les dés sont "coincés"

Voici un exemple:

```
1er  lancer : 1, 3, 5, 1, 2 : le score est de 5 (1 + 3 + 1), deux dés mis de côté
2ème lancer : 2, 3, 6       : le score est de 9 (3 + 6),  un dé mis de côté
3ème lancer : 5,5           : le score est de zéro, fin de partie
```

## Sujet du kata

Le jeu est en partie implémenté dans une classe appelée `Lancer`

Pour utiliser la classe, il faut passer directement les 5 valeurs des dés

La classe peut alors:

* Calculer le score
* Dire si la partie est finie
* Calculer le nombre de dés restant

Il y a aussi une classe `main()` qui implémente le premier lancer.

Il faut finir l'implémentation du jeu - mais peut-être y a-t-il
quelque chose à faire avant de foncer tête bessée dans le code ?
