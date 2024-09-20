import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Survey() {
    const { questionNumber } = useParams();
    let numero = parseInt(questionNumber);
    let precedent = "";
    let suivant = "";
    if (numero === 1) {
        precedent = "";
        suivant = "/survey/2";
    }
    else if (numero === 10) {
        precedent = "/survey/9";
        suivant = "/results";
    }
    else {
        precedent = "/survey/" + (numero - 1);
        suivant = "/survey/" + (numero + 1);
    }
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <nav>
                <Link to={precedent}>Précédent</Link>
                <Link to={suivant}>Suivant</Link>
            </nav>
        </div>
    )
}
export default Survey