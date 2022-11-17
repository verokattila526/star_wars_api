# Devoralime - Angular Coding Interview

In this round we would like to know more about your coding skills to determine your level as a developer.

You will use the Star Wars API (SWAPI) during these tasks to make it less boring to you. :)

Every task's solution under 'Send Tasks' should be posted with the help of {SolutionService}, it's only for self checking the responses to make sure your code is working properly. Create different routes for them: task-solution-{number}

You should upload everything into your own git repository (make sure it's a public repository) and write it's url in the email as well.

The application's design is up to you, make it user friendly and have a Star Wars like theme.

Read all the tasks thoroughly, do them with your best knowledge and follow as many clean code principle as possible.

You can choose any external library to complete the tasks, it's up to you just make sure it's the cleanest way to do it.

Good luck! :)

## Preparation

    1. Install Docker and set up the backend with the 'npm run start' command

    2. Make sure you can use the following url: http://localhost/api

    3. Generate a new Angular application with the latest version and a new API into an api folder using @openapitools/openapi-generator-cli

    API: http://localhost/api-json

    4. Config the generated API in Angular according to the @openapitools/openapi-generator-cli docs and make sure it's usable

    5. (BONUS): Config Prettier and ESLint with import sorting functionality for the Angular application

    6. (BONUS): Config TailwindCSS and use it only for the application styles

    7. (BONUS): Config Husky to lint commit messages before commit using commitlint

    8. (BONUS): Config Husky to lint codebase (Prettier + ESLint) before push

## Base Tasks

    1. Get all film through SWAPI, create a card component using @angular/material and show them by chronological order with the following properties: title | opening_crawl (without escape sequences) | release_date (format: YYYY.MM.DD)

    2. Get each film's cover image through MediaWiki API (https://en.wikipedia.org/w/api.php) and put it in the previously created card component

    3. MediaWiki API is an external API so we don't have any proper model for the film cover request, create a type for the data structure with the following name: Cover

    4. (SKIP IF ALREADY CREATED) Create a resolver which resolves both request and returns the following structure: { films: Film[], covers: Cover[] }

    5. Use the created resolver to fill the card component with all the infos needed

    6. Make the card clickable, on click navigate to a different sub-route, create a component and show the following infos only of the clicked movie:

        - Every character's name
        - If it's not a droid show it's species
        - Name of the films where the character shows up

## Send Tasks

    1. Search the tallest blond human, send it's name

    2. Get all planet which shows up in all film and has mountains, send their names

    3. Search for the most common species which has a known average lifespan, send it's name

    4. Get the fastest starship and vehicle which is manufactured by 'Kuat Drive Yards', send their names

    5. Get every entity which doesn't have any unknown property, send their names in the following format: Peoples: people1, people2 | Planets: planet1, planet2

    6. (BONUS): As you can see the tables has many fields with unknown values, clear all of them to empty values using only the frontend application, count the cleared ones and send the counted value
