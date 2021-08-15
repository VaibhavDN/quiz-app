export default function DisplayResult(props) {
    return (
        <div>
            <div>Total questions: {props.rounds}</div>
            <div>Correct answers: {props.correctAnswers}</div>
            <div>Skipped answers: {props.skippedAnswers}</div>
            <div>Incorrect answers: {props.rounds - props.correctAnswers - props.skippedAnswers}</div>
        </div>
    )
}