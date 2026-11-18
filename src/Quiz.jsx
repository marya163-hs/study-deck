// a reducer is a function that takes current state and action (a message describing what happened)
// it returns a new state
// dispatch is how we send an action

// dispatch (correct) -> reducer (score, action) => score + 1

import { useReducer, useState } from 'react'
import { Button } from '@/components/ui/button';

const initialState = { current: 0, score: 0 }

// the reducer
function quizReducer(state, action) {
    switch (action.type) {
        case "answer":
            return {
                current: state.current + 1,
                score: action.correct ? state.score + 1 : state.score
            };
        case "restart":
            return initialState;
        default:
            return state;
    }
}

// quiz component
function Quiz({cards}) {
    const [state, dispatch] = useReducer(quizReducer, initialState)

    // a small bit of local UI state
    const [showAnswer, setShowAnswer] = useState(false)

    //if we've gone past the last card the quiz is over
    if (state.current >= cards.length) {
        return (
            <div className="mt-5 rounded-xl border border-(--border) bg-(--bg-elevated) p-6">
                <h2 className="mb-3 text-xl font-bold">Quiz complete!</h2>
                <p className="mb-4 text-(--text-muted)">You scored {state.score}/{cards.length}</p>
                <Button
                    onClick={()=> {
                        dispatch({ type: "restart" });
                        setShowAnswer(false)
                    }}
                >Play Again</Button>
            </div>
        )
    }
    const card = cards[state.current]

    function answer(correct) {
        dispatch({ type:"answer", correct: correct })
        setShowAnswer(false)
    }

    return (
        <div className="mt-5 rounded-xl border border-(--border) bg-(--bg-elevated) p-6">
            <p className="mb-4 text-(--text-muted)">Question No. {state.current + 1} of {cards.length} Score: {state.score}</p>
            <h2 className="mb-3 text-xl font-bold">{card.question}</h2>

            {!showAnswer && <Button onClick={() => setShowAnswer(true)}>Show answer</Button> }

            {showAnswer && (
                <>
                <p className="mb-4 leading-[1.4] text-(--success)">{card.answer}</p>
                <div className="flex gap-2">
                    <Button onClick={() => answer(true)}>I got it right</Button>
                    <Button onClick={() => answer(false)}>I got it wrong</Button>
                </div>
                </>
            )}

        </div>
    )

}

export default Quiz