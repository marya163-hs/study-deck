import { useState, useEffect } from 'react';

// two things that make a hook

// 1. the name starts with use
// 2. it uses other hooks inside and we return an object with everything app needs

// custom hook: a function starting with "use" that bundles reusable logic
export function useCards() {
    // create an empty array in memory to hold our cards
    const [cards, setCards] = useState([])

    // are we still waiting? for the data
    const [loading, setLoading] = useState(true)

    // did it go wrong? when fetching data
    const [error, setError] = useState(false)

    // use effect skeleton
    // it runs the code inside after the component first appears
    // the empty list at the end means "run this only ONCE on load"
    useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=50&encode=url3986")
            .then((response) => response.json())
            .then((data) => {
                // we turn each item into our card shape
                const loaded = data.results.map((item, index) => ({
                    id: index,
                    category: decodeURIComponent(item.category),
                    question: decodeURIComponent(item.question),
                    answer: decodeURIComponent(item.correct_answer)
                }));

                setCards(loaded)
                setLoading(false)

            })
            .catch(()=>{
                setError(true)
                setLoading(false)
            })

    }, []);

    // hand back everything a component needs to use these cards
    return { cards, setCards, loading, error }
}