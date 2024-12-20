import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../assets/data/questions";
import Question from "./Question";
import Summary from "./Summary";

export function MainQuiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answeredState, setAnsweredState] = useState("");
  const ActiveQuestionIndex =
    answeredState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnsweredState("answered");

      setTimeout(() => {
        if (selectedAnswer == QUESTIONS[ActiveQuestionIndex].answers[0]) {
          setAnsweredState("correct");
        } else {
          setAnsweredState("wrong");
        }
        setTimeout(() => {
          setAnsweredState("");
        }, 2000);
      }, 1000);
      if (userAnswers.length < QUESTIONS.length) {
        setUserAnswers((prevUserAnswer) => {
          return [...prevUserAnswer, selectedAnswer];
        });
      }
    },
    [ActiveQuestionIndex]
  );
  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  return (
    <>
    {userAnswers.length < QUESTIONS.length ? (
    <div className="overflow-y-auto scrollbar-hide" id="quiz">
        <Question
          key={ActiveQuestionIndex}
          Questiontext={QUESTIONS[ActiveQuestionIndex].text}
          answers={QUESTIONS[ActiveQuestionIndex].answers}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
          answerState={answeredState}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
        />
    </div>

      ) : (
        <Summary userAnswers={userAnswers}/>
      )}
      </>
  );
}
