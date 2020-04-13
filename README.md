# Insctruction

## Outils 

- [Visual Studio Code](https://code.visualstudio.com/)
- [Typora](https://code.visualstudio.com/)
- [Filezilla](https://filezilla-project.org/)
- [Node.js](https://nodejs.org/en/)

## Lancer le projet

1. Lancer Visual Studio Code
2. Lancer Typora
3. Lancer l'app web en Local `npm run develop`
4. Réaliser les changements en local
5. Puis faire CTL+C pour terminé le serveur local
6. Compiler l'app pour la production avec `npm run build`
7. Attendre que l'app soit créer. Elle se trouve dans le dossier [./build](./build)
8. Lancer Filezilla
9. Rentrer les identifiants de connexion.
10. Aller dans le dossier ./public_html du serveur.
11. Supprimer le contenue existant sauf .. et .well-know
12. Faire un glisser déposer du contenue de D:/site/dist dans le dossier public_html
13. Attendre la fun des transferts de fichiers puis aller sur [auditen-courtage](http://auditen-courtage.fr)

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