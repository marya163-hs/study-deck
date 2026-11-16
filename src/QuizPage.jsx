import Quiz from "./Quiz.jsx";

function QuizPage({ cards }) {
    if (cards.length ===0) return <p>Loading cards..</p>
    return <Quiz cards={cards} />
}

export default QuizPage