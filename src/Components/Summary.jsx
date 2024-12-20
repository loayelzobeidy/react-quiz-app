import quizCompelteImg from "../assets/images/quiz-complete.png";
import QUESTIONS from "../assets/data/questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

  const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongAnswersSahre = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary" className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg">
      <img src={quizCompelteImg} alt="Trophy icon" className="w-48 h-48 mx-auto mb-4" />
      <p className="text-center text-2xl font-bold mb-4">You are done with the quiz congrats!</p>
      <div className="grid grid-cols-3 gap-4">
        <p className="flex items-center justify-center text-xl font-bold text-gray-700">
          <span className="mr-2 text-4xl text-green-500">{skippedAnswersShare} %</span>
          Skipped
        </p>
        <p className="flex items-center justify-center text-xl font-bold text-gray-700">
          <span className="mr-2 text-4xl text-blue-500">{correctAnswersShare} %</span>
          Answered Correctly
        </p>
        <p className="flex items-center justify-center text-xl font-bold text-gray-700">
          <span className="mr-2 text-4xl text-red-500">{wrongAnswersSahre} %</span>
          Answered Incorrectly
        </p>
      </div>
      <ol className="list-decimal mt-8">
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          cssClass += answer === null ? " skipped" : answer === QUESTIONS[index].answers[0] ? " correct" : " wrong";

          return (
            <li key={index} className="mb-4 border-b border-gray-200">
              <h3 className="text-xl font-bold">{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}