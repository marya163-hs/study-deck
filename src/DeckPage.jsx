import { useState, useEffect, useRef } from "react"; // memory tool, managing side effects
import Flashcard from "./Flashcard.jsx";
import { btnClass , inputClass } from "./styles.js";
import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input";

function DeckPage({ cards, setCards, loading, error}) {
    // state to hold whatever the user types for the question
    const [question, setQuestion] = useState("")
    // state to hold whatever the user types for the answer
    const [answer, setAnswer] = useState("")
    // create an empty ref, we will eventually point it at a question input
    const questionInput = useRef(null)


    // when an app loads put the cursor in the question box automatically
    useEffect(()=>{
        // .current is the actual input element, and .focus() puts the cursor inside it
        questionInput.current.focus()
    }, [])

    function addCard(event) {
        event.preventDefault() // stops the browsers page from reloading when form submitted

        if (question.trim() === "" || answer.trim() === "") return;

        // build a new card object from what the user typed
        // Date.now() which gives us a unique number
        const newCard = {
            id: Date.now(),
            category: "Custom",
            question: question,
            answer: answer
        }
        setCards([...cards, newCard])

        // clear the input fields
        setQuestion("")
        setAnswer("")

    }

    return (
        <div className="p-6">

            <form onSubmit={addCard} className="my-4 flex flex-wrap gap-2">
                <Input
                className="w-auto flex-1"
                    ref={questionInput}
                    type="text"
                    placeholder="Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <Input
                    className="w-auto flex-1"
                    type="text"
                    placeholder="Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <Button type="submit">Add Card</Button>
            </form>


            {/*conditional render*/}
            <p className="text-(--text-muted)">{cards.length} cards in your deck.</p>
            {/*if there are zero cards show this message*/}
            {cards.length === 0 && <p className="text-(--text-muted)">No cards yet...</p>}

            {/*while waiting show this*/}
            {loading && <p className="text-(--text-muted)">Loading DATA.....</p>}

            {/*if we failed to get data, show this*/}
            {error && <p className="text-(--text-muted)">Could not load cards, try refreshing!</p>}

            <Button onClick={ ()=> setCards([]) }>Clear all</Button>

            <div className="mt-5 flex flex-wrap gap-4">
                {
                    // go through every card in the list and build a flashcard from it
                    cards.map((card) => (
                        <Flashcard
                            key={card.id}
                            category={card.category}
                            question={card.question}
                            answer={card.answer}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default DeckPage