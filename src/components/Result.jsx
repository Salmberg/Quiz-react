import { Link } from 'react-router-dom';


const Result = (props) => {


    return (
        <section>
            <h2>Resultat</h2>
            <p> Du fick {props.score} poäng!</p>
            <Link to="/">
             <button onClick={props.restartQuiz}>Kör igen</button>
            </Link>
        </section>
    )
}

export default Result;