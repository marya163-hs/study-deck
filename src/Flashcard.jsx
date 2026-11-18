import { useState } from 'react';
import {Card , CardContent} from "@/components/ui/card";

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
        <Card 
            className="w-[220px] cursor-pointer gap-0 bg-(--bg-elevated) p-5 text-(--text) transition duration-150 hover:-translate-y-0.5 hover:border-(--accent)"
             onClick={ () => setIsFlipped(!isFlipped) }
        >
            <CardContent className="px-5">
                <p className="mb-2 text-xs uppercase tracking-[0.4em] text-(--accent)">{category}</p>
                <p className="font-semibold leading-[1.4] text-(--text)">{isFlipped ? answer : question}</p>
            </CardContent>
        
        </Card>
    )

}


// ternary operator

// <condition> ? <true> : <false>


export default Flashcard;


// props come from the outside and they stay fixed
// state lives inside the component and can change
// everytime a state changes react redraws the component