import { useState } from 'react';

function Flashcard({ category="General", question, answer }) {

// props = {
//  category: "Geography",
//  question: "What is the capital of Japan?",
//  answer: "Tokyo"
// }

    // use state(false) -> it creates a memory slot that starts as false
    // it hands back two things:
    // isFlipped = the current value
    // setIsFlipped = the ONLY way to change it (everytime that we change the state the component redraws)
    const [isFlipped, setIsFlipped] = useState(false)


    return(
        <div className="w-[220px] cursor-pointer rounded-xl border border-(--border) bg-(--bg-elevated) p-5 text-(--text) transition duration-150 hover:-translate-y-0.5 hover:border-(--accent)"
             onClick={ () => setIsFlipped(!isFlipped) }
        >
            <p className="mb-2 text-xs uppercase tracking-[0.4em] text-(--accent)">{category}</p>
            <p className="mb-3 font-semibold leading-[1.4] text-(--text)">{isFlipped ? answer : question}</p>
        </div>
    )

}


// ternary operator

// <condition> ? <true> : <false>


export default Flashcard;


// props come from the outside and they stay fixed
// state lives inside the component and can change
// everytime a state changes react redraws the component