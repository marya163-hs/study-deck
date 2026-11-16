// creating a component of our own
// a component is basically a function that returns
// a piece of the screen

import Header from './Header.jsx'
import DeckPage from './DeckPage.jsx'
import QuizPage from "./QuizPage.jsx";

import { useCards } from "./useCards.js";
import { useContext } from 'react';
import { ThemeContext } from "./ThemeContext.jsx";

import { Routes, Route, Link } from 'react-router-dom'

//classes shared by both nav links
const linkClass =" text-(--accent) no-underline font-semibold text-sm hover:underline "

// we are creating a component called App

// store cards as data (arrays/list of items/objects)

function App() {
    // shared deck for quiz and deck page
    const { cards, setCards, loading, error } = useCards()
    // grab the theme
    const { theme } = useContext(ThemeContext)

  return (
      <div className={`app ${theme} mx-auto max-w-200 p-6 text-(--text)`}>
          <Header />

          <nav className="mt-3 mb-5 flex gap-4">
              <Link to="/" className="{linkClass}">Deck</Link>
              <Link to="/quiz" className="{linkClass}">Quiz</Link>
          </nav>

          <Routes>
              <Route path="/" element={<DeckPage cards={cards} setCards={setCards} loading={loading} error={error} />} />
              <Route path="/quiz" element={<QuizPage cards={cards} />} />
          </Routes>

      </div>
  );
}

export default App;

// controlled input -> reacts state is the single source for whats in the box.
// we tie the box's value to a state variable
// update the state variable everytime the user types

// Side Effect
// side effect is basically anything that a component does that is not drawing itself on the screen
// talking to the internet
// fetching data
// setting a timer
// reading the browser
// a special tool to run these at the right moment
// useEffect

// use____ -> react hook
// we want to fetch our cards ONCE, right when the app first appears


// custom hook
// all of our fetching, card state, loading, error and useEffect
// app.jsx can simply import and use

// prop drilling
// we pass a prop down through layers of components (some that might not even use it)
// for something like a global theme it gets messy

// dark/light theme that the header and the whole app both use.
// drilling would be a mess, context fixes it.

// when several values change on every action lots of separate use state have to be followed
// useReducer keeps related state in ONE object and updates it through "named actions"
// what happens when we _____ -> lives in one place

// our quiz state is current (question number)
// score both of these change on every answer and we will use UseReducer

// react builds single page applications
// the browser loads once then js swaps the content
// routing is how we show different pages for different urls /api /health /login /register
// without a real reload
// react router

// were turning our one screen app into two clean pages. Deck & Quiz
