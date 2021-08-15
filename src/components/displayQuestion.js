export default function DisplayQuestion(props) {
    return (
        <div className="quiz-quetion-wrapper">
            <div className="quiz-quetion">
                <div>Instructions: Round your answer to the nearest integer</div>
                <div>What is {props.number1} {props.type} {props.number2}?</div>
            </div>
        </div>
    )
}