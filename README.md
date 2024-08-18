Bot Battlr

Welcome to Bot Battlr, a React application that allows you to browse, enlist, and manage a custom Bot Army!
Project Description

Bot Battlr is a web app that lets users view a list of available bots, enlist bots into their army, and manage their bot collection. The app features:

    Bot Collection: Display a list of available bots.
    Your Bot Army: Add bots to your army and manage them.
    Bot Details: View detailed information about each bot.
    Sorting & Filtering: Sort bots by health, damage, or armor, and filter by bot class.

Features
Core Deliverables

    See profiles of all bots rendered in BotCollection.
    Add a bot to your army and render it in YourBotArmy. Each bot can be enlisted only once.
    Release a bot from your army and remove it from YourBotArmy.
    Discharge a bot from service, removing it from both YourBotArmy and the backend.

Advanced Deliverables

    View detailed bot information with BotSpecs.
    Sort bots by health, damage, or armor using a SortBar.
    Filter bots by class and ensure only one bot from each class can be enlisted.

Getting Started
Prerequisites

    Node.js and npm (or yarn) installed
    JSON Server for mock API

Installation

    Clone the repository:

    bash

git clone https://github.com/salyviah/bot-battlr.git
cd bot-battlr

Install dependencies:

bash

npm install

Set up the JSON Server:

    Create a db.json file in the root directory with the bot data provided in the challenge description.
    Start the JSON Server:

    bash

    json-server --watch db.json

Start the React application:

bash

    npm start

    Open your browser and navigate to http://localhost:3000 to view the app.

Project Structure

    src/ - Contains all the React components and application logic.
    db.json - Mock database for JSON Server.
    README.md - This file.

Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.
Author

salyviah kamau