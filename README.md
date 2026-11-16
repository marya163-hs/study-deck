# StudyDeck

A flashcard and quiz app built with React, Vite, and React Router. StudyDeck loads trivia questions from the [Open Trivia DB](https://opentdb.com/) API, lets you build your own custom flashcards, and quizzes you on the full deck.

## Features

- **Deck page** — browse your flashcards, add your own question/answer cards, and clear the deck
- **Quiz page** — test yourself against every card in the deck
- **Auto-loaded trivia** — 50 questions fetched from Open Trivia DB on first load
- **Light/dark theme** — app-wide theme via React Context
- **Client-side routing** — `/` for the deck, `/quiz` for the quiz, powered by React Router

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (with the Rolldown-powered build)
- [React Router](https://reactrouter.com/)
- [Oxlint](https://oxc.rs/) for linting

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# lint the project
npm run lint

# build for production
npm run build

# preview the production build
npm run preview
```

## Project structure

```
src/
├── App.jsx           # routes and top-level layout
├── Header.jsx         # app header
├── DeckPage.jsx        # add/view flashcards
├── QuizPage.jsx        # quiz entry point
├── Quiz.jsx           # quiz logic and scoring
├── Flashcard.jsx       # single flashcard component
├── ThemeContext.jsx      # light/dark theme context
├── useCards.js         # custom hook: fetches and manages card state
└── main.jsx           # app entry point
```

## License

This project is for personal/educational use.
