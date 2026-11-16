//a component is a function

import { useContext } from 'react'
import { ThemeContext } from "./ThemeContext.jsx";
import { btnClass } from "./styles.js";

function Header(){

    const { theme, toggleTheme } = useContext(ThemeContext)

    return(
        <header className="mb-1 border-b border-(--border) pb-4">
            <h1 className='mb-1 text-2xl font-bold tracking-[-0.01em]'>StudyDeck</h1>
            <p className="mb-3.5 text-sm text-(--text-muted)">THIS IS MY HEADER SECTION!</p>

            <button className={btnClass} onClick={toggleTheme}>
                Switch theme to { theme === "dark" ? "light" : "dark" } mode
            </button>

        </header>
    )
}

export default Header;

// four main rules
// rule 1
// a component must return a single wrapping element

// rule 2
// className not class because were in javascript
// the word class is reserved

// rule 3
// close EVERY tag use shortcut /

// rule 4
// javascript goes in {}