# Déjà Vu - REST Server
## Your Bookmarks in the Cloud

Déjà Vu is a Bookmark Manager. It aims to be dead simple for you to use. Once logged in, you will be able to:
* Easily browse your own bookmarks;
* Add a new bookmark by copy/pasting a given URL;
* Edit/Tag/Describe/Remove an existing bookmark;
* Organize your bookmarks by tags/categories/folders;
* Quickly search your own bookmarks;
* Share a bookmark with friends;
* Discover new interesting bookmarks;
* Import/Export bookmarks with standard browsers.

Check out the [live demo](http://guitul.github.io/dejavu-web/) for the web version!
This repository is dedicated to provide REST services for the web and hybrid clients. It is deployed as an Heroku app, please see the [Node.js Support](https://devcenter.heroku.com/articles/nodejs-support) if you want more information.

## Projects
Déjà Vu consists of 3 different projects:
* [Déjà Vu - Web Client](https://github.com/guitul/dejavu-web)
* [Déjà Vu - Hybrid Client](https://github.com/guitul/dejavu-hybrid)
* [Déjà Vu - REST Server](https://github.com/guitul/dejavu-server)

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [MongoDB](https://www.mongodb.com/)

### Installation
1. Clone the repository: `git clone https://github.com/guitul/dejavu-server.git`
2. Install the NodeJS dependencies: `npm install`.
3. Start the MongoDB server
4. Set the environment variable `MONGODB_URI` to match your MongoDB setup, for instance `mongodb://localhost:27000/dejavu`
5. Start a local development server for app dev and testing with `npm start`.

### Development
Please keep in mind that for the time being lots of features are not yet implemented:
* User authentication
* Link target parsing
* Custom categories management
* Tags management
* Sharing capability
* Import/Export with standard browsers
