import { useState } from 'react';
import QuestionManager from './questionManager';

export default function Projects() {
    let [type, setType] = useState("Mix");
    let [rounds, setRounds] = useState(0);
    let [beginQuiz, setBeginQuiz] = useState(false);

    let startQuiz = () => {
        if (rounds > 0) {
            setBeginQuiz(true);
        }
    }

    if (rounds < 1 || !beginQuiz) {
        return (
            <div className="quiz-manager-wrapper">
                <div>
                    <h5>Welcome to the arithmetic practice quiz</h5>
                </div>
                <div className="quiz-mode-heading">
                    <span>Select quiz mode: </span>
                    <select onChange={option => setType(option.target.value)}>
                        <option>Mix</option>
                        <option>Addition</option>
                        <option>Substraction</option>
                        <option>Multiplication</option>
                        <option>Division</option>
                    </select>
                </div>

                <div className="rounds-wrapper">
                    <span>Enter the number of rounds: </span>
                    <input className="rounds" type="number" min="1" max="100" onChange={count => setRounds(count.target.value)} />
                </div>

                <div className="submit-wrapper">
                    <button className="begin-quiz" onClick={() => startQuiz()}>Begin quiz</button>
                </div>
            </div >
        )
    }

    return <QuestionManager rounds={rounds} type={type} />
}