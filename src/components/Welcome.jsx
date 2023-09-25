import { Link } from "react-router-dom";



const Welcome = (props) => {



    return (
        <section>
            <h2>Välkommen till Quizet!</h2>
            <p>Vill du köra igång</p>
            <Link to ="/game">
            <button>JA</button>
            </Link>
        </section>
    )
}


export default Welcome;