import './App.css';
import './styles/app.css';
import QuizManager from './components/quizManager';

function App() {
  return (
    <div className="App">
      <div className="row quiz-wrapper">
        <div className="col-sm-6 quiz-pannel-left">
          <QuizManager />
        </div>
        <div className="col-sm-6 quiz-pannel-right">
          <QuizManager />
        </div>
      </div>
    </div>
  );
}

export default App;
