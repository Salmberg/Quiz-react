
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Game = (props) => {
    const questions = getQuestions();


   //const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    let currentQuestion = 1;

    const navigate = useNavigate();
    const params = useParams();


    if ('questionNumber' in params) {
        if (params.questionNumber > 0 && params.questionNumber <= questions.length) {
               currentQuestion = Number(params.questionNumber);
        }
     }

    const question = questions[currentQuestion -1];

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
        //setCurrentQuestion(currentQuestion +1);
        navigate('/game/'+(currentQuestion + 1));
        } else {
            //props.showResult();
            navigate('/result');
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