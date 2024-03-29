# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## project-3 (videogame-api)

## User Story

```md
As a user, I want to be able to view the top trending video games
As a user, I want to be able to view all games
As a user, I want to be able to search for games 
As a user, I want to be able to create an account
<!-- As a user, I want to be able to be able to click on links for each game and be redirected to it purchasing site -->

## Acceptance Criteria

Given a homepage 
Then I am able to view the top trending video games 
Then when I go to search for a movie then I am redirected to a login/ signup page 
Then if I log in or create an account with valid credentials I can access the game I searched for
Given the game I searched for I should be presented with information such as the release date, summary, rating and poster image
Then I am given a choice to add game to my favorites list in my account
When I click on favorites I am redirected to my account page holding all of my favorite games

## dependancies 
- react
- vite
- tailwind