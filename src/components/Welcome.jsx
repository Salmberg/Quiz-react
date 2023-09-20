


const Welcome = (props) => {



    return (
        <section>
            <h2>Välkommen till Quizet!</h2>
            <p>Vill du köra igång</p>
            <button onClick={props.nextScreen}>JA</button>
        </section>
    )
}


export default Welcome;