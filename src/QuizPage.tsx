import Quiz from "./Quiz";
import { FlashcardData } from "./types";

function QuizPage({ cards }: {cards: FlashcardData[]}) {
    if (cards.length ===0) return <p>Loading cards..</p>
    return <Quiz cards={cards} />
}

export default QuizPage