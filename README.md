# Instruction

## Outils 

- [Visual Studio Code](https://code.visualstudio.com/)
- [Typora](https://code.visualstudio.com/)
- [Filezilla](https://filezilla-project.org/)
- [Node.js](https://nodejs.org/en/)

## Lancer le projet

1. Lancer Visual Studio Code
2. Lancer Typora
3. Lancer l'app web en Local dans le terminal de VSC `npm run develop`
4. Réaliser les changements en local: ajout de page, modification de texte...
5. Puis faire CTL+C pour terminer le serveur local, taper oui
6. Compiler l'app pour la production avec `npm run build`
7. Attendre que l'app soit créée. Elle se trouve dans le dossier [./build](./build)
8. Lancer Filezilla
9. Rentrer les identifiants de connexion. (Ils se trouvent dans .env.local)
10. Aller dans le dossier ./public_html du serveur o2switch (Site distant).
11. Supprimer le contenu existant sauf ".. " et ".well-know"
12. Faire un glisser déposer du contenu de D:/site/dist dans le dossier public_html
13. Attendre la fin des transferts de fichiers puis aller sur [auditen-courtage](http://auditen-courtage.fr)





## Création de nouvelles pages/blog

### Création de Page

1. Créer un fichier <nom>.md dans le dossier ./page
2. Placer les meta données en haut de la page

```
---
title: url-de-la-page
metainfo: titre-de-la-page
---
```
3. Ecrire en dessous le contenue de la page
4. Enregistrer la page
5. Aller dans ./src/layouts/Default.vue
6. Puis ajouter un g-link en rentrant les données comme les autres g-link (Attention: il faut mettre 2 g-link: pour le desktop et pour le mobile)

### Création de page de blog

De même que les étapes 1 à 4 de la création  de page mais mettre le fichier dans le dossier ./blog


## App Web

### Local

Pour lancer l'application en localhost:
`npm run develop`
Cela lance un serveur en local pour faire les différents changements.

### Production

Pour lancer la version de production:
`npm run build`
Cela créer le site web sous le réportoire : ./build

Ensuite mettre le contenue du répertoire dans le répertoire ./public_html du serveur o2switch.



## Sauvegarder son travail

Pour permettre de sauvegarder le site web et avoir des versions de secours.
On utilise [Github](https://github.com/).

Lorsque cette icon à un chiffre:

![](.\doc\icon-commit.PNG)

Cela indique qu'un fichier n'est pas versionné.

On rentre un message dans la partie message:

![](.\doc\Commit-message.PNG)

Puis on click sur le check:

![](.\doc\commit-check.PNG)

Ensuite, on click en bas à droite sur cette icon:

![](.\doc\push-server.PNG)

Si la flèche est vers le haut, la version n'est pas poussé vers le serveur.

Si la flèche est vers le bas, une nouvelle version sur le serveur n'est pas synchroniser avec le PC. 

## Ajouter le pdf à la page

Ajouter dans les meta-données des pages post:

pdf: LienVersPdf.pdf
pdfName: NomBoutonPdf

Mettre le pdf dans le dossier: ./static