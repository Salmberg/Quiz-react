import { useState } from "react";


const Game = (props) => {
    const questions = getQuestions();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const question = questions[currentQuestion];

    const options = question.answers.map((answer, index) => (
        <p className="option" key={index}>
            <input type="radio" name="question" onClick={() => setSelectedAnswer(index)} /> {answer}
        </p>
    ))

    const handleDecided = () => {
        if (selectedAnswer === question.correct) {
            console.log('Rätt!');
            props.answeredCorrectly();
            
        }

        if ( currentQuestion < questions.length -1) {
        setCurrentQuestion(currentQuestion +1);
        } else {
            props.showResult();
        }

    }


    return (
        <div>
            <h3>{question.question}</h3>
            {options}
            <button onClick={handleDecided}>Nästa</button>
        </div>
    )

}

const getQuestions = () => {
    return [
        {
            question: "När det det julafton?", 
            answers: ['24 maj', '24 dec', '24 juni'],
            correct: 1
        },

        {
            question: "Finns tomten?", 
            answers: ['ja', 'nej', 'kanske'],
            correct: 2
        },

        {
            question: "När ska uppgiften vara inne?", 
            answers: ['24 maj', '6 oktober', '24 juni'],
            correct: 1
        }
    ]
}

export default Game;