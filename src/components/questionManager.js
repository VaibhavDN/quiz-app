import { useEffect, useState } from 'react';

import DisplayQuestion from './displayQuestion';
import DisplayResult from './displayResult';

export default function QuestionManager(props) {
    let [type, setType] = useState("Mix");
    let [rounds, setRounds] = useState(0);
    let [currentRound, setCurrentRound] = useState(1);
    let [correctAnswers, setCorrectAnswers] = useState(0);
    let [skippedAnswers, setSkippedAnswers] = useState(0);

    useEffect(() => {
        let rounds = props.rounds || 1;
        let type = props.type || "Mix";

        setRounds(rounds);
        setType(type);
    }, []);

    let typeMap = {
        "Addition": "+",
        "Substraction": "-",
        "Multiplication": "*",
        "Division": "/"
    }
    let typeList = Object.keys(typeMap);
    let roundType = type;
    if (type === "Mix") {
        roundType = typeList[Math.floor(Math.random() * typeList.length)];
    }

    let max = 10;
    let min = 1;
    let number1 = Math.floor(Math.random() * (max - min) + min);
    let number2 = Math.floor(Math.random() * (max - min) + min);
    let answer = 0;

    let submitAnswer = () => {
        answer = parseInt(answer);
        if (!isNaN(answer)) {
            if (roundType === "Addition") {
                if (number1 + number2 === answer) {
                    setCorrectAnswers(correctAnswers + 1);
                }
            }
            else if (roundType === "Substraction") {
                if (number1 - number2 === answer) {
                    setCorrectAnswers(correctAnswers + 1);
                }
            }
            else if (roundType === "Multiplication") {
                if (number1 * number2 === answer) {
                    setCorrectAnswers(correctAnswers + 1);
                }
            }
            else if (roundType === "Division") {
                if (Math.round(number1 / number2) === answer) {
                    setCorrectAnswers(correctAnswers + 1);
                }
            }
        }
        setCurrentRound(currentRound + 1);
    }

    if (currentRound <= rounds) {
        return (
            <div>
                <DisplayQuestion number1={number1} number2={number2} type={typeMap[roundType]} />
                <div className="answer-wrapper">
                    <input type="number" onChange={inputAnswer => answer = inputAnswer.target.value}></input>
                </div>
                <div className="navigationAction">
                    <button className="submitAnswer" onClick={() => submitAnswer()}>Submit answer</button>
                    <button className="skipQuestion" onClick={() => {
                        setSkippedAnswers(skippedAnswers + 1);
                        setCurrentRound(currentRound + 1);
                    }}>
                        Skip question
                    </button>
                </div>
                <div className="roundIndicator">Question {currentRound} of {rounds}</div>
                <div className="resultSoFar">Correct: {correctAnswers} Skipped: {skippedAnswers}</div>
            </div>
        )
    }

    return <DisplayResult rounds={rounds} correctAnswers={correctAnswers} skippedAnswers={skippedAnswers} />
}