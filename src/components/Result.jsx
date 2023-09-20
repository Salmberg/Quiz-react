
const Result = (props) => {


    return (
        <section>
            <h2>Resultat</h2>
            <p> Du fick {props.score} poäng!</p>
            <button onClick={props.restart}>Kör igen</button>
        </section>
    )
}

export default Result;