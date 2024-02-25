# Bot Discord Ts

Un projet simple pré-configuré pour démarrer la création d'un bot Discord. Vous n'avez qu'à mettre votre `CLIENT_ID` et votre `TOKEN` dans le fichier `.env` et c'est parti. 
Pour créer d'autres commandes ajoutez des fichiers dans le dossier `Commands`, en prenant pour exemple le fichier `test.ts`. Laissez libre cours à votre imagination !

## Table des matières

- [Installation](#installation)
- [Configuration Application Discord](#Configuration Application Discord)


## Installation

Pour installer ce projet sur votre machine locale, suivez les étapes ci-dessous :

1. Cloner ce dépôt :
   ```bash
   git clone https://github.com/fenixo76/BotDiscordTs.git
   
2. Installer les dépendances :
   ```bash
    npm i

3. Modifiez le fichier .env :
   ```bash
   CLIENT_ID=123456789123456789
   TOKEN=4156fzefzFZEFfzef4e8z6f4-z0zfez-zefez-FZEFZEf46f5ze4f6

4. Compiler le code :
   ```bash
   npm run build
   
## Configuration Application Discord

Sur la page de configuration de votre application Discord, vérifiez bien si les éléments suivants sont cochés dans l'onglet Bot.

PRESENCE INTENT
SERVER MEMBERS INTENT
MESSAGE CONTENT INTENT
