import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"

export default function Question({Questiontext,answers,onSelectAnswer,onSkipAnswer,selectedAnswer,answerState}){
    return(
<div className="flex flex-col items-center justify-center">
  <QuestionTimer
    timeout={10}
    onTimeout={onSkipAnswer}
  />
  <p className="text-center text-lg font-bold mb-4">
    {Questiontext}
  </p>
  <Answers
    answers={answers}
    selectedAnswer={selectedAnswer}
    answerState={answerState}
    onSelect={onSelectAnswer}
  />
</div>
    )
}